let majorScale = [0, 2, 4, 5, 7, 9, 11, 12]
let minorScale = [0, 2, 3, 5, 7, 8, 10, 12]
let noteNames = {
  'C': 1,
  'C#': 2,
  'D': 3,
  'D#': 4,
  'E': 5,
  'F': 6,
  'F#': 7,
  'G': 8,
  'G#': 9,
  'A': 10,
  'B': 11,
  'B#': 12, }

let chords = {
  majorTriad: [0, 4, 7],
  minorTriad: [0, 3, 7],
  maj1stInv: [0,-8,-5]
}

let keyChords = {
  a: chords.majorTriad,
  s: chords.minorTriad,
  d: chords.maj1stInv
}

let scaleTable = {
  "Major - Ionian": majorScale,
  "Minor - Aeolian": minorScale
}

const scale = {
  root: 28,
  chordType: chords.majorTriad,
  scaleType: majorScale
}

const setHertz = ( num, octave ) => {
	return ( Math.pow( 2, ( (num - 49)/12 )) * 440 ) * Math.pow(2, octave)
}

const setFrequency = ( note ) => {
  let octave = 0
  while( note > 10 ){
    note = note-10
    octave++
  }
  let scaleDegree = scale.root + scale.scaleType[note -1]
  triad( scaleDegree, scale.chordType, octave )
}

const triad = ( rootNote, chord, octave ) => {
  oscillator1.frequency.setTargetAtTime( setHertz( rootNote, octave ), audioContext.currentTime, 0. )
  oscillator2.frequency.setTargetAtTime( setHertz(rootNote+chord[1], octave), audioContext.currentTime, 0 )
  oscillator3.frequency.setTargetAtTime( setHertz(rootNote+chord[2], octave), audioContext.currentTime, 0 )
}

const selectNewNote = ( note, octave) => {
  scale.root = noteNames[note] + (octave*12 - 9)
}

const selectNewScale = ( newScale ) => {
  scale.scaleType = scaleTable[newScale]
}

const setChord = ( keypress ) => {
  scale.chordType = keyChords[keypress] || chords.majorTriad
}
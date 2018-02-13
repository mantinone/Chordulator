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

const scale = {
  root: 28,
  chordType: majorScale
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
  let scaleDegree = scale.root + majorScale[note -1]
  triad( scaleDegree, scale.chordType, octave )
}

const triad = ( rootNote, scale, octave ) => {
  oscillator1.frequency.setTargetAtTime( setHertz( rootNote, octave ), audioContext.currentTime, 0. )
  oscillator2.frequency.setTargetAtTime( setHertz(rootNote+scale[2], octave), audioContext.currentTime, 0 )
  oscillator3.frequency.setTargetAtTime( setHertz(rootNote+scale[4], octave), audioContext.currentTime, 0 )
}

const selectNewNote = ( note, octave) => {
  scale.root = noteNames[note] + (octave*12 - 9)
}
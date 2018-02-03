let majorScale = [0, 2, 4, 5, 7, 9, 11, 12]
let minorScale = [0, 2, 3, 5, 7, 8, 10, 12]

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
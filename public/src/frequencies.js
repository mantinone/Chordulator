let majorScale = [0, 2, 4, 5, 7, 9, 11, 12]
let minorScale = [0, 2, 3, 5, 7, 8, 10, 12]

const scale = {
  root: 40,
  chordType: majorScale
}

const setHertz = ( num ) => {
	return Math.pow( 2, ( (num - 49)/12 )) * 440
}

const setFrequency = ( note ) => {
  let scaleDegree = scale.root + majorScale[note -1]
  triad( scaleDegree, scale.chordType )
}

const triad = ( rootNote, scale ) => {
  let rootHertz = setHertz( rootNote )
  oscillator1.frequency.setTargetAtTime( rootHertz, audioContext.currentTime, 0. )
  oscillator2.frequency.setTargetAtTime( setHertz(rootNote+scale[2]), audioContext.currentTime, 0 )
  oscillator3.frequency.setTargetAtTime( setHertz(rootNote+scale[4]), audioContext.currentTime, 0 )
}
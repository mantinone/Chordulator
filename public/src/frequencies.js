let currentScaleRoot = 40

let majorScale = [0, 2, 4, 5, 7, 9, 11, 12]
let minorScale = [0, 12]

const setHertz = ( num ) => {
	return Math.pow( 2, ( (num - 49)/12 )) * 440
}

const setFrequency = ( note ) => {
  let scaleDegree = currentScaleRoot + majorScale[note]
  majorTriad( scaleDegree )
}

const majorTriad = ( rootNote ) => {
  let rootHertz = setHertz( rootNote )
  oscillator1.frequency.setTargetAtTime( rootHertz, audioContext.currentTime, 0. )
  oscillator2.frequency.setTargetAtTime( setHertz(rootNote+4), audioContext.currentTime, 0 )
  oscillator3.frequency.setTargetAtTime( setHertz(rootNote+7), audioContext.currentTime, 0 )
}
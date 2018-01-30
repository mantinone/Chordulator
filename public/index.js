
const audioContext = new AudioContext()
const vol = audioContext.createGain()

const setHertz = ( num ) => {
	return Math.pow( 2, ( (num - 49)/12 )) * 440
}

const setupOscillator = ( note, gain ) => {
  let newOscillator = audioContext.createOscillator()
  newOscillator.type = "triangle"
  newOscillator.frequency.value = setHertz( note )
  newOscillator.start(0)
  newOscillator.connect(gain)
  return newOscillator
}
const oscillator1 = setupOscillator(40, vol)
const oscillator2 = setupOscillator(44, vol)
const oscillator3 = setupOscillator(47, vol)

vol.connect(audioContext.destination)
vol.gain.value = 0
let noise = false

document.addEventListener( "DOMContentLoaded", function(event) {
  let soundButton = document.getElementById('playNote')
  let freqButton = document.getElementById('freqButton')
  soundButton.addEventListener('click', playSound )
  freqButton.addEventListener('click', setFrequency )
})

const playSound = ( event ) => {
  if(noise){
    noise = false
    vol.gain.setTargetAtTime( 0, audioContext.currentTime, 0.1)
  } else {
    noise = true
    vol.gain.setTargetAtTime( 1, audioContext.currentTime, 0.02)
  }
}

const setFrequency = ( event ) => {
  let freqInput = document.getElementById('freqInput')
  let newNote = parseInt(freqInput.value)
  majorTriad( newNote )
}

const majorTriad = ( rootNote ) => {
  let rootHertz = setHertz( rootNote )
  oscillator1.frequency.setTargetAtTime( rootHertz, audioContext.currentTime, 0. )
  oscillator2.frequency.setTargetAtTime( setHertz(rootNote+4), audioContext.currentTime, 0 )
  oscillator3.frequency.setTargetAtTime( setHertz(rootNote+7), audioContext.currentTime, 0 )
}

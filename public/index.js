
const audioContext = new AudioContext()
const oscillator1 = audioContext.createOscillator()
const oscillator2 = audioContext.createOscillator()
const oscillator3 = audioContext.createOscillator()

const vol = audioContext.createGain()
let noise = false

oscillator1.frequency.value = 261.626
oscillator2.frequency.value = 329.628
oscillator3.frequency.value = 391.995

oscillator1.start(0)
oscillator2.start(0)
oscillator3.start(0)

oscillator1.connect(vol)
oscillator2.connect(vol)
oscillator3.connect(vol)

vol.connect(audioContext.destination)

vol.gain.value = 0


document.addEventListener( "DOMContentLoaded", function(event) {
  let soundButton = document.getElementById('playNote')
  let freqButton = document.getElementById('freqButton')
  soundButton.addEventListener('click', playSound )
  freqButton.addEventListener('click', setFrequency )
})

const playSound = ( event ) => {
  console.log(event.target);
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
  let newFreq = parseInt(freqInput.value)
  majorTriad( newFreq )
}

const majorTriad = ( rootTone ) => {
  oscillator1.frequency.setTargetAtTime( rootTone, audioContext.currentTime, 0.02 )
  oscillator2.frequency.setTargetAtTime( rootTone*5/4, audioContext.currentTime, 0.02 )
  oscillator3.frequency.setTargetAtTime( rootTone*3/2, audioContext.currentTime, 0.02 )
}
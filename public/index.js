
const audioContext = new AudioContext()
const oscillatorC = audioContext.createOscillator()
const oscillatorE = audioContext.createOscillator()
const oscillatorG = audioContext.createOscillator()

const vol = audioContext.createGain()
let noise = false

oscillatorC.frequency.value = 261.626
oscillatorE.frequency.value = 329.628
oscillatorG.frequency.value = 391.995

oscillatorC.start(0)
oscillatorE.start(0)
oscillatorG.start(0)

oscillatorC.connect(vol)
oscillatorE.connect(vol)
oscillatorG.connect(vol)

vol.connect(audioContext.destination)

vol.gain.value = 0


document.addEventListener( "DOMContentLoaded", function(event) {
  let soundButton = document.getElementById('playNote')
  soundButton.addEventListener('click', playSound )
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
const audioContext = new AudioContext()
const oscillator = audioContext.createOscillator()
oscillator.frequency.value = 300
oscillator.connect(audioContext.destination)
//oscillator.start(0)

document.addEventListener( "DOMContentLoaded", function(event) {
  let soundButton = document.getElementById('playNote')
  soundButton.addEventListener('click', playSound )
})

const playSound = () => {
  console.log('Hello World');
}
const audioContext = new AudioContext()
const vol = audioContext.createGain()

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

document.addEventListener( "DOMContentLoaded", function(event) {
  let soundButton = document.getElementById('noteBox')
  let freqButton = document.getElementById('freqButton')
  soundButton.addEventListener('mousedown', playSound )
  soundButton.addEventListener('mouseup', stopSound )
  soundButton.addEventListener('mouseleave', stopSound )
  document.addEventListener('keydown', handleKeydown )
  document.addEventListener('keyup', handleKeyup )
})

const handleKeydown = ( event ) => {
  const key = event.key || null
  scale.chordType = minorScale
}

const handleKeyup = ( event ) => {
  const key = event.key || null
  scale.chordType = majorScale
}

const playSound = ( event ) => {
  let note = event.target.dataset.degree
  setFrequency( note )
  vol.gain.setTargetAtTime( 1, audioContext.currentTime, 0.02)
}

const stopSound = ( event ) => {
  vol.gain.setTargetAtTime( 0, audioContext.currentTime, 0.1)
}


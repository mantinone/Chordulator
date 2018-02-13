const audioContext = new AudioContext()
const vol = audioContext.createGain()

const setupOscillator = ( gain ) => {
  let newOscillator = audioContext.createOscillator()
  newOscillator.type = "triangle"
  newOscillator.start(0)
  newOscillator.connect(gain)
  return newOscillator
}
const oscillator1 = setupOscillator( vol )
const oscillator2 = setupOscillator( vol )
const oscillator3 = setupOscillator( vol )

vol.connect(audioContext.destination)
vol.gain.value = 0

document.addEventListener( "DOMContentLoaded", function(event) {
  let soundButton = document.getElementById('noteBox')
  let freqButton = document.getElementById('freqButton')
  let noteSelect = document.getElementById('noteSelect')
  let octaveSelect = document.getElementById('octaveSelect')
  soundButton.addEventListener('mousedown', playSound )
  soundButton.addEventListener('mouseup', stopSound )
  soundButton.addEventListener('mouseleave', stopSound )
  noteSelect.addEventListener('change', changeNote)
  octaveSelect = document.addEventListener('change', changeNote)
  document.addEventListener('keydown', handleKeydown )
  document.addEventListener('keyup', handleKeyup )
})

const changeNote = ( event ) => {
  const noteSelect = document.getElementById('noteSelect')
  const octaveSelect = document.getElementById('octaveSelect')

  selectNewNote( noteSelect.value, parseInt(octaveSelect.value) )  
}

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


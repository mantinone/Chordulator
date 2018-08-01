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
  let scaleSelect = document.getElementById('scaleSelect')
  let octaveSelect = document.getElementById('octaveSelect')
  soundButton.addEventListener('mousedown', playSound )
  soundButton.addEventListener('mouseup', stopSound )
  soundButton.addEventListener('mouseleave', stopSound )
  noteSelect.addEventListener('change', changeNote)
  octaveSelect.addEventListener('change', changeNote)
  scaleSelect.addEventListener('change', changeScale)
  document.addEventListener('keydown', handleKeydown )
})

const changeNote = ( event ) => {
  const noteSelect = document.getElementById('noteSelect')
  const octaveSelect = document.getElementById('octaveSelect')

  selectNewNote( noteSelect.value, parseInt(octaveSelect.value) )
}

const changeScale = ( event ) => {
  const scaleSelect = document.getElementById('scaleSelect')

  selectNewScale( scaleSelect.value )
}

const handleKeydown = ( event ) => {
  const key = event.key || null
  setChord( key )
}

const playSound = ( event ) => {
  let note = event.target.dataset.degree
  setFrequency( note )
  vol.gain.setTargetAtTime( 1, audioContext.currentTime, 0.02)
}

const stopSound = ( event ) => {
  vol.gain.setTargetAtTime( 0, audioContext.currentTime, 0.1)
}


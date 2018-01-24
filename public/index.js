document.addEventListener( "DOMContentLoaded", function(event) {
  let soundButton = document.getElementById('playNote')
  soundButton.addEventListener('click', playSound )
})

const playSound = () => {
  console.log('Hello World');
}
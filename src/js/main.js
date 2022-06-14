// get element
const selectButton = document.querySelector('.open__button')
const selectModelPopup = document.querySelector('.model__popup')
const selectModelTextAlert = document.getElementById('textAlert')
const selectModelOverlay = document.querySelector('.overlay')
const selectCloseButton = document.querySelector('span')
const selectRestartButton = document.querySelector('.restart__Button')

//counter
let counterButton = 1;

//function counter + text
const counter = () => {
  let counterButton = localStorage.counterButton++
  selectModelTextAlert.textContent = `You have click ${counterButton} times to relate button`

  if (counterButton >= 5) {
    selectRestartButton.style.display = 'block'
  }

}

// function show alert
const openPopup = () => {
  selectModelPopup.classList.add('active');
  selectModelOverlay.classList.add('active');
  counter()
}

//function close popup
const closePopup = () => {
  selectModelPopup.classList.remove('active');
  selectModelOverlay.classList.remove('active');
}

//Reset counter
const resetCounter = () => {
  localStorage.counterButton = 1;
  selectModelTextAlert.innerText = `You have click ${counterButton} times to relate butto`
  selectRestartButton.style.display = 'none'
}

//Listen 
selectModelPopup.addEventListener('click', closePopup)
selectButton.addEventListener('click', openPopup)
selectCloseButton.addEventListener('click', closePopup)
selectRestartButton.addEventListener('click', resetCounter)
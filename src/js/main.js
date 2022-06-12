// get element
const selectButton = document.querySelector('.open__button')
const selectModelPopup = document.querySelector('.model__popup')
const selectContainerPopup = document.querySelector('.container__popup')
const selectModelTextAlert = document.getElementById('textAlert')
const selectModelOverlay = document.querySelector('#overlay')
const selectCloseButton = document.querySelector('span')
const selectRestartButton = document.querySelector('.restart__Button')


//function counter + text
let counterButton = 1;

const counter = () => {
  selectModelTextAlert.innerText = `You have click ${counterButton++} times to relate butto`
  if (counterButton > 5) {
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
  counterButton = 1;
  selectModelTextAlert.innerText = `You have click ${counterButton++} times to relate butto`
  selectRestartButton.style.display = 'none'
}

//Listen 
selectButton.addEventListener('click', openPopup)
selectCloseButton.addEventListener('click', closePopup)
selectRestartButton.addEventListener('click', resetCounter)
const btbChangeColorEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

btbChangeColorEl.addEventListener('click', onChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColor() {
  const newColor = getRandomHexColor();

  spanColorEl.textContent = newColor; 
  document.querySelector('body').style.backgroundColor = newColor;
}
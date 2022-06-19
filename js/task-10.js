const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const inputOfAmountEl = document.querySelector('input[type="number"]');
const containerForBoxesEl = document.querySelector('#boxes');

let amount;

inputOfAmountEl.addEventListener('input', (event) => {
  amount = event.currentTarget.value;
});

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  const arrayNewBoxes = [];  

  for (let i = 1; i <= amount; i += 1) {
    let newBox = 
    `<div 
      style="width: ${i * 10 + 20}px; 
      height: ${i * 10 + 20}px; 
      background-color: ${getRandomHexColor()};">
    </div>`;
    arrayNewBoxes.push(newBox);    
  }

  containerForBoxesEl.insertAdjacentHTML('afterbegin', arrayNewBoxes.join(''));  
}

function destroyBoxes() {
  containerForBoxesEl.innerHTML = "";
}
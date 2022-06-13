let counterValue = Number(document.querySelector('#value').textContent);

const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
btnDecrementEl.addEventListener('click', () => {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;  
});

const btnIncrementEl = document.querySelector('button[data-action="increment"]');
btnIncrementEl.addEventListener('click', () => {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
})
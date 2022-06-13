const validationInputEl = document.querySelector('#validation-input');
validationInputEl.addEventListener('blur', (event) => {
  (event.currentTarget.value.length === Number(validationInputEl.dataset.length))
    ? validationInputEl.classList.add('valid')
    : validationInputEl.classList.add('invalid');
});
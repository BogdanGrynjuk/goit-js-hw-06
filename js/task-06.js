const validationInputEl = document.querySelector('#validation-input');
validationInputEl.addEventListener('blur', (event) => {

  validationInputEl.classList.add('invalid');
  validationInputEl.classList.remove('valid');

  if ((event.currentTarget.value.length === Number(validationInputEl.dataset.length))) {
    validationInputEl.classList.add('valid');
    validationInputEl.classList.remove('invalid');    
  }
  
});
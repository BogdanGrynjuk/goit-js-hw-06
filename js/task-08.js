const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
 
  formData.forEach((value, name) => {
    if (!value) {      
      alert('Будь ласка заповніть усі поля!!!');
      console.clear();
      return;
    }
    console.log(`${name}: ${value}`);
  });

  event.currentTarget.reset();
}
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();  

  const { elements: { email, password } } = event.currentTarget;

  if (!email.value || !password.value) {
    console.clear();
    return alert('Будь ласка заповніть усі поля!!!');
  }

  console.log(email);
  console.log(password); 

  event.currentTarget.reset();
}
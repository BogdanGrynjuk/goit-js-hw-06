const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();  

  const { elements: { email, password } } = event.currentTarget;

  if (!email.value || !password.value) {
    console.clear();
    return alert('Будь ласка заповніть усі поля!!!');
  }

  console.log(`${email.name}: ${email.value}`);
  console.log(`${password.name}: ${password.value}`); 

  event.currentTarget.reset();
}
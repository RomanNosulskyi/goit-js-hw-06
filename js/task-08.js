const form = document.querySelector("form.login-form");
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Будь-ласка, заповніть всі поля форми");
  } else {
    console.log(`Email: ${email.value}, Password ${password.value}`);
    event.currentTarget.reset();
  }
}

const form = document.querySelector("form.login-form");
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Будь-ласка, заповніть всі поля форми");
  } else {
    const formData = {
      email,
      password,
    };
  }
});
console.log(formData);

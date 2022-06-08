const form = document.querySelector(".login-form");
const button = document.querySelector("[type=submit]");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    mail,
    password,
  };

  if (mail == "" || password == "") {
    return alert("You need to fill all the fields");
  } else {
    console.log(formData);
  }
  event.currentTarget.reset();
}

const firstnameInput = document.querySelector("#first-name-input");
const lastnameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  if (firstNameInput.value === "") {
    firstNameInput.classList.remove("is-valid");
  } else {
    firstNameInput.classList.remove("is-invalid");
  }
};

lastnameInput.onkeyup = () => {
  if (lastnameInput.value === "") {
    lastnameInput.classList.remove("is-valid");
  } else {
    lastnameInput.classList.remove("is-invalid");
  }
};

emailInput.onkeyup = () => {
  if (emailInput.value === "") {
    emailInput.classList.remove("is-valid");
  } else {
    emailInput.classList.remove("is-invalid");
  }
};
passwordInput.onkeyup = () => {
  if (passwordInput.value === "") {
    passwordInput.classList.remove("is-valid");
  } else {
    passwordInput.classList.remove("is-invalid");
  }
};

submitBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isPasswordOk = false;
  let isEmailOk = false;

  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }
  if (lastnameInput.value === "") {
    lastnameInput.classList.add("is-invalid");
  } else {
    lastnameInput.classList.add("is-valid");
    isLastNameOk = true;
  }
  if (validateEmail(emailInput.value === true)) {
    emailInput.classList.add("is-valid");
  } else {
    emailInput.classList.add("is-invalid");
    isEmailOk = true;
  }
  if (passwordInput.value.length >= 6) {
    passwordInput.classList.add("is-valid");
  } else {
    passwordInput.classList.add("is-invalid");
    isPasswordOk = true;
  }

  isFirstNameOk &&
    isLastNameOk &&
    isEmailOk &&
    isPasswordOk &&
    alert("Register Successfully");
};

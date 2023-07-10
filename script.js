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

firstnameInput.onkeyup = () => {
  if (firstnameInput.value === "") {
    firstnameInput.classList.remove("is-valid");
  } else {
    firstnameInput.classList.remove("is-invalid");
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
  let isLastNameOk = !1;
  let isPasswordOk = !1;
  let isEmailOk = !1;
  let isFirstNameOk = !1;
  if (firstnameInput.value === "") {
    firstnameInput.classList.add("is-invalid");
    isFirstNameOk = !1;
  } else {
    firstnameInput.classList.add("is-valid");
    isFirstNameOk = !0;
  }
  if (lastnameInput.value === "") {
    lastnameInput.classList.add("is-invalid");
    isLastNameOk = !1;
  } else {
    lastnameInput.classList.add("is-valid");
    isLastNameOk = !0;
  }
  if (validateEmail(emailInput.value) === !0) {
    emailInput.classList.add("is-valid");
    isEmailOk = !0;
  } else {
    emailInput.classList.add("is-invalid");
    isEmailOk = !1;
  }
  if (passwordInput.value.length >= 6) {
    passwordInput.classList.add("is-valid");
    isPasswordOk = !0;
  } else {
    passwordInput.classList.add("is-invalid");
    isPasswordOk = !1;
  }

  if (
    isFirstNameOk === true &&
    isLastNameOk === true &&
    isEmailOk === true &&
    isPasswordOk === true
  )
    alert("Register Successfully");
};

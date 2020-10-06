// Self-contained IIFE for validation functionality
(function formValidation() {
  // Selecting form and input elements
  const form = document.querySelector("#form");
  const firstName = document.querySelector("#name__first");
  const lastName = document.querySelector("#name__last");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  // Selecting the error message divs
  const fnameError = document.querySelector("#error__fname");
  const lnameError = document.querySelector("#error__lname");
  const passwordError = document.querySelector("#error__password");
  const emailError = document.querySelector("#error__email");

  // Checking validation on form submit
  form.addEventListener("submit", (e) => {
    // First name validation
    if (firstName.value === "") {
      errorFirstName();
      e.preventDefault();
    } else {
      errorFirstNameRemove();
    }

    // Last name validation
    if (lastName.value === "") {
      errorLastName();
      e.preventDefault();
    } else {
      errorLastNameRemove();
    }

    // Email validation
    let emailRegex = new RegExp("@.*?.");
    if (emailRegex.test(email.value) === false) {
      errorEmail();
      e.preventDefault();
    } else {
      errorEmailRemove();
    }

    // Password validation
    if (password.value === "") {
      errorPassword();
      e.preventDefault();
    } else {
      errorPasswordRemove();
    }
  });

  // Removing error message when user goes back to correct
  firstName.addEventListener("focus", errorFirstNameRemove);
  lastName.addEventListener("focus", errorLastNameRemove);
  email.addEventListener("focus", errorEmailRemove);
  password.addEventListener("focus", errorPasswordRemove);

  // Adds error message for invalid first name
  function errorFirstName() {
    fnameError.classList.add("error--active");
    firstName.classList.add("error__input");
  }

  // Removes error message for first name
  function errorFirstNameRemove() {
    fnameError.classList.remove("error--active");
    firstName.classList.remove("error__input");
  }

  // Adds error message for invalid last name
  function errorLastName() {
    lnameError.classList.add("error--active");
    lastName.classList.add("error__input");
  }

  // Removes error message for last name
  function errorLastNameRemove() {
    lnameError.classList.remove("error--active");
    lastName.classList.remove("error__input");
  }

  // Adds error message for invalid email
  function errorEmail() {
    emailError.classList.add("error--active");
    email.classList.add("error__input");
  }

  // Removes error message for email
  function errorEmailRemove() {
    emailError.classList.remove("error--active");
    email.classList.remove("error__input");
  }

  // Adds error message for invalid password
  function errorPassword() {
    passwordError.classList.add("error--active");
    password.classList.add("error__input");
  }

  // Removes error message for password
  function errorPasswordRemove() {
    passwordError.classList.remove("error--active");
    password.classList.remove("error__input");
  }
})();

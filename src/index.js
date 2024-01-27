const firstName = document.querySelector("#f-name");
const lastName = document.querySelector("#l-name");
const email = document.querySelector("#e-mail");
const zip = document.querySelector("#zip");
const password = document.querySelector("#psw");
const passwordConfirm = document.querySelector("#psw-conf");
const showPassBtn = document.querySelector("#psw-eye");

const constraints = {
  nameValidation: [
    /^[a-zA-Z]{2,20}$/,
    "Name should be between 2-20 characters and contain only letters",
  ],
  emailValidation: [
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    "Email should be in the correct format eg. name@mail.com",
  ],
  zipValidation: [
    /^\d{5}(?:[-\s]\d{4})?$/,
    "Zip code should be in the following formats eg. 12345, 12345-6789, 12345 1234",
  ],
  passwordValidation: [
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
    "Password should contain at least one lowercase, uppercase, number and a symbol",
  ],
};

const checkPassConfirm = (input) => {
  if (input.value === password.value) {
    input.setCustomValidity("");
  } else {
    input.setCustomValidity("Please input the same password as above");
  }
};

const checkValidity = (input, validation) => {
  const isCorrect = validation[0].test(input.value);
  if (isCorrect) {
    input.setCustomValidity("");
  } else {
    input.setCustomValidity(validation[1]);
  }
};

firstName.addEventListener("input", () =>
  checkValidity(firstName, constraints.nameValidation)
);

lastName.addEventListener("input", () =>
  checkValidity(lastName, constraints.nameValidation)
);

email.addEventListener("input", () =>
  checkValidity(email, constraints.emailValidation)
);

zip.addEventListener("input", () =>
  checkValidity(zip, constraints.zipValidation)
);

password.addEventListener("input", () =>
  checkValidity(password, constraints.passwordValidation)
);

passwordConfirm.addEventListener("input", () =>
  checkPassConfirm(passwordConfirm)
);

showPassBtn.addEventListener("click");

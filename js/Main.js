const submitButton = document.querySelector(".submit-button");
const errorMessage = document.querySelector(".error-message");
const mainInput = document.querySelector(".main-input");

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function detectValue(e) {
  e.preventDefault();
  mainInput.addEventListener("click", function (e) {
    e.target.value = "";
    errorMessage.style.height = "0";
    mainInput.style.border = "1px solid #c2d3ff";
  });
  if (emailRegex.test(mainInput.value)) {
    errorMessage.style.height = "auto";
    errorMessage.style.color = "green";
    errorMessage.innerHTML = "Thank you, we will contact you shortly !";
  } else {
    errorMessage.style.height = "auto";
    mainInput.style.border = "1px solid red";
  }
}

submitButton.addEventListener("click", detectValue);

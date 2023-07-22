//  делаем инпут красным если кол во символов больше 6 и зеленым нсли меньше.

const input = document.getElementById("validation-input");

function validateInput() {
  const desiredLength = +input.getAttribute("data-length");
  const inputValue = input.value.trim();

  if (inputValue.length === desiredLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

input.addEventListener("blur", validateInput);

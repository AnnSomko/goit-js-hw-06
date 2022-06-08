let input = document.querySelector("#validation-input");
let dataLength = input.getAttribute("data-length");
input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (Number(dataLength) === input.value.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

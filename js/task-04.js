const buttonValue = document.querySelector("#value");
const minusButton = document.querySelector('button[data-action="decrement"]');
const plusButton = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

plusButton.addEventListener("click", buttonIncrement);
minusButton.addEventListener("click", buttonDecrement);

function buttonIncrement() {
  buttonValue.textContent = `${++counterValue}`;
}

function buttonDecrement() {
  buttonValue.textContent = `${--counterValue}`;
}

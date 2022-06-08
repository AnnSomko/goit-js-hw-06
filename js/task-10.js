let createButton = document.querySelector("button[data-create]");
let destroyButton = document.querySelector("button[data-destroy]");
let parentBox = document.querySelector("#boxes");

createButton.addEventListener("click", createDiv);

function createDiv() {
  let amountOfBoxes = Number(document.querySelector("input").value);
  for (let i = 0; i < amountOfBoxes; i++) {
    let div = document.createElement("div");
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.backgroundColor = getRandomHexColor();
    parentBox.appendChild(div);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

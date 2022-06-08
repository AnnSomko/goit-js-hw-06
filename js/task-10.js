let createButton = document.querySelector("button[data-create]");
let destroyButton = document.querySelector("button[data-destroy]");
let parentBox = document.querySelector("#boxes");

createButton.addEventListener("click", createDiv);
destroyButton.addEventListener("click", destroyBoxes);

function createDiv() {
  let amountOfBoxes = Number(document.querySelector("input").value);
  for (let i = 0; i < amountOfBoxes; i++) {
    let div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.marginTop = "10px";
    div.style.marginBottom = "10px";
    parentBox.appendChild(div);
  }
}
function destroyBoxes() {
  parentBox.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

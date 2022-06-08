let categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

let item = document.querySelectorAll(".item");

item.forEach((li) =>
  console.log(
    `Category: ${li.firstElementChild.textContent} \nElements: ${li.lastElementChild.children.length}`
  )
);

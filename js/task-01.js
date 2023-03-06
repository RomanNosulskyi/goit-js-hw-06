const listEl = document.querySelector("#categories");
const itemEl = listEl.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((element) => {
  const itemName = element.firstElementChild.textContent;
  const itemElnts = element.lastElementChild.children.length;
  console.log(`Category: ${itemName}`);
  console.log(`Elements: ${itemElnts}`);
});

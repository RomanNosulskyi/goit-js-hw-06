const listEl = document.querySelector("#categories");
const itemEl = listEl.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((element) => {
  const itemName = element.querySelector("h2").textContent;
  const itemElnts = element.querySelectorAll("li").length;
  console.log(`Category: ${itemName}`);
  console.log(`Elements: ${itemElnts}`);
});

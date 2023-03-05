const fontSize = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

fontSize.addEventListener("input", (event) => {
  const newFontSize = event.target.value + "px";
  textSize.style.fontSize = newFontSize;
});

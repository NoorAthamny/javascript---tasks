const container = document.querySelector(".container");
const highlightable = document.querySelectorAll(".highlightable");

highlightable.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("highlighted");
  });

  item.addEventListener("mouseout", () => {
    item.classList.remove("highlighted");
  });
});

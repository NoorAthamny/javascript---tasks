const toggleBtn = document.getElementById("toggleButton");
const body = document.body;

function toggleBackgroundColor() {
  body.classList.toggle("dark");
}

toggleBtn.addEventListener("click", toggleBackgroundColor);

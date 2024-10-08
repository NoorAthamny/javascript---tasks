const openBtn = document.getElementById("showModalBtn");
const overLay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", function () {
  overLay.style.display = "block";
});

overLay.addEventListener("click", function (e) {
  if (e.target === closeBtn || e.target === overLay) {
    overLay.style.display = "none";
  }
});

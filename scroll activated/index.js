const text = document.querySelectorAll(".text");

window.addEventListener("scroll", function () {
  const windowheight = window.innerHeight;

  text.forEach((box) => {
    const topBox = box.getBoundingClientRect().top;

    if (topBox < windowheight) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
});

const faqItem = document.querySelectorAll(".faq-item");

faqItem.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

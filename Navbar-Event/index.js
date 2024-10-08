const navList = document.getElementById("navList");
const message = document.getElementById("message");

navList.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    //   console.log(e.target);
    // console.log(e.target.dataset.link);

    const innerMessage = e.target.dataset.link;
    message.style.display = "block";
    message.innerText = innerMessage;

    setTimeout(() => {
      message.style.display = "none";
    }, 2000);
  }
});

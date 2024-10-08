const keyDisplay = document.getElementById("keyDisplay");

document.addEventListener("keydown", (e) => {
  console.log(e);
  //   keyDisplay.innerText = e.key;
  if (e.key === " ") {
    keyDisplay.innerText = e.code;
  } else {
    keyDisplay.innerText = e.key;
  }
});

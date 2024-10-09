const triggerRejection = document.getElementById("triggerRejection");
const triggerPromise = document.getElementById("triggerPromise");
const message = document.getElementById("message");

triggerPromise.addEventListener("click", function () {
  const simplePromise = new Promise((resovle, reject) => {
    setTimeout(function () {
      if (triggerRejection.checked) {
        reject();
      } else {
        resovle();
      }
    }, 1000);
  });

  simplePromise
    .then(() => {
      const resolved = document.createElement("div");
      resolved.textContent = "The Promise has been resolved!";
      resolved.classList.add("resolved");
      message.appendChild(resolved);
    })
    .catch(() => {
      const checked = document.createElement("div");
      checked.textContent = "The Promise has been rejected!";
      checked.classList.add("rejected");
      message.appendChild(checked);
    });
});

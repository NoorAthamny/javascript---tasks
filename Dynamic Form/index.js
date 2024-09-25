const form = document.getElementById("dynamicForm");
const add = form.firstElementChild;
const submit = document.querySelector("button[type='button']");
// console.log(add);
function addField() {
  const inputEl = document.createElement("input");
  form.appendChild(inputEl);
}
add.addEventListener("click", addField);

function submitForm() {
  const inputs = document.querySelectorAll("#dynamicForm input");
  let allFilled = true;
  let message = "";
  inputs.forEach((input) => {
    if (input.value === "") {
      allFilled = false;
    } else {
      message += `${input.value},`;
    }
  });

  if (!allFilled) {
    alert("Must fill All Inputs");
  } else {
    alert(message);
  }
}
submit.addEventListener("click", submitForm);

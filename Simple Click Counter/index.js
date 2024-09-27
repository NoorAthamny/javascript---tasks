const clickBtn = document.getElementById("addBtn");
const counter = document.getElementById("counter");
const removeBtn = document.getElementById("removeBtn");

let count = 0;
clickBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

removeBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counter.textContent = count;
  } else {
    count = 0;
  }
});

// i added another btn ' remove ' and if the count is less tan 0 count = 0 ;

//NOTE: the " let count = 0; " i forgot that i need a sum i checked in Stack Overflow...

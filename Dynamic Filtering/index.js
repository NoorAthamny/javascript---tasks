const categories = document.getElementById("categories");
const items = document.getElementById("items");

const data = {
  fruits: ["Apple", "Banana", "Cherry"],
  vegetables: ["Carrot", "Broccoli", "Lettuce"],
  dairy: ["Milk", "Cheese", "Yogurt"],
};

categories.addEventListener("click", function (e) {
  const category = e.target.dataset.category; // return the clicked cate
  //   console.log(e.target);
  if (data[category]) {
    //Clear the existing items if there is any : )
    items.innerHTML = "";

    // 2. create new element
    data[category].forEach((item) => {
      const li = document.createElement("li"); // create li
      li.textContent = item;
      items.appendChild(li);
    });
  }
});

// data.fruits.forEach((fruit) => {
//   const test = document.createElement("li");
//   test.textContent = fruit;
//   items.appendChild(test);
// });

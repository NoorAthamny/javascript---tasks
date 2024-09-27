// 1.
const cart = {};
// adding
function addProductToCart(productId) {
  return function () {
    // Logic for adding product to cart
    if (cart[productId]) {
      cart[productId]++;
    } else {
      cart[productId] = 1;
    }
    updateCart();
  };
}

function updateCart() {
  //store the cart items
  // clear previuos ent using empty string
  const cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = "";

  for (let [productId, quantity] of Object.entries(cart)) {
    // Logic goes here...

    const cartItemDiv = document.createElement("div");
    // creating the el
    cartItemDiv.classList.add("cart-item");

    cartItemDiv.innerHTML = `Product ID: ${productId}
    Quantity: ${quantity}`;

    cartItems.appendChild(cartItemDiv);
  }
}

const productDivs = document.querySelectorAll(".product");
productDivs.forEach((el) => {
  const addToCart = el.querySelector("div button");
  const productId = el.getAttribute("data-id");

  addToCart.addEventListener("click", addProductToCart(productId));
  console.log(cart);
});

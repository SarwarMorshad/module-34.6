const addToCart = () => {
  console.log("Add to cart");
  const nameEL = document.getElementById("product-name");
  const quantityEL = document.getElementById("product-quantity");
  const name = nameEL.value;
  const quantity = quantityEL.value;
  displayCart(name, quantity);
  addToCartLocalStorage(name, quantity);

  nameEL.value = "";
  quantityEL.value = "";
};

// Cart Display
const displayCart = (name, quantity) => {
  const cartContainer = document.getElementById("cart-items");
  const li = document.createElement("li");
  li.innerText = `${name} : ${quantity}`;
  cartContainer.appendChild(li);
};

// localStorage
const addToCartLocalStorage = (name, quantity) => {
  const cart = getCartFromLocalStorage();
  if (cart[name]) {
    cart[name] = parseInt(cart[name]) + parseInt(quantity);
  } else {
    cart[name] = quantity;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

const getCartFromLocalStorage = () => {
  let cart = {};

  const cartItems = localStorage.getItem("cart");
  console.log(cartItems);
  return cartItems ? JSON.parse(cartItems) : {};
};

const displayCartFromLocalStorage = () => {
  const cart = getCartFromLocalStorage();
  for (const name in cart) {
    const quantity = cart[name];
    displayCart(name, quantity);
  }
};
displayCartFromLocalStorage();

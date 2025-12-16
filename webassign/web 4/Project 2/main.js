const products = [
  { id: 1, name: "T-Shirt", price: 50, image: "images/image1.jpg" },
  { id: 2, name: "Mug", price: 30, image: "images/image2.jpg" },
  { id: 3, name: "Notebook", price: 20, image: "images/image3.jpg" }
];

let cart = [];

// RENDER PRODUCTS
function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(product => {
    const card = `
      <div class="product-card">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>GHC ${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    container.innerHTML += card;
  });
}

// ADD TO CART
function addToCart(id) {
  const product = products.find(p => p.id === id);

  // Check if already in cart
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  renderCart();
}

// RENDER CART
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    const row = `
      <div style="margin-bottom:10px;">
        <b>${item.name}</b> - GHC ${item.price} x ${item.qty}
        <button onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    `;

    cartItems.innerHTML += row;
  });

  cartTotal.innerHTML = "Total: GHC " + total;
}

// REMOVE FROM CART
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

// CHECKOUT BUTTON
document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Checkout successful!");
    cart = [];
    renderCart();
  }
});

// LOAD PRODUCTS WHEN PAGE LOADS
renderProducts();

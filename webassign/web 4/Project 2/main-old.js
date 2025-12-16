const products = [
  { id: 1, name: "T-Shirt", price: 50, image: "images/image1.jpg" },
  { id: 2, name: "Mug", price: 30, image: "images/image2.jpg" },
  { id: 3, name: "Notebook", price: 20, image: "images/image3.jpg" }
];

function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(product => {
    const card = `
      <div class="product-card">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>GHC ${product.price}</p>
        <button>Add to Cart</button>
      </div>
    `;
    container.innerHTML += card;
  });
}

renderProducts();

const menuToggle = document.getElementById("menuToggle");
const dropdown = document.getElementById("mainDropdown");
const aboutSection = document.getElementById("aboutSection");
const productContainer = document.getElementById("productContainer");
const cartCount = document.getElementById("cartCount");

let cart = 0;

menuToggle.onclick = () => {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
};

function goHome() {
    aboutSection.style.display = "none";
    productContainer.style.display = "grid";
}

function goAbout() {
    productContainer.style.display = "none";
    aboutSection.style.display = "block";
}

const products = [
    { name: "Kids Jacket", price: 999, category: "kids", image: "https://via.placeholder.com/300" },
    { name: "Men T-Shirt", price: 799, category: "men", image: "https://via.placeholder.com/300" },
    { name: "Women Dress", price: 1499, category: "women", image: "https://via.placeholder.com/300" }
];

function displayProducts(list) {
    productContainer.innerHTML = "";
    list.forEach(p => {
        productContainer.innerHTML += `
            <div class="product-card">
                <img src="${p.image}">
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <div class="price">₹${p.price}</div>
                    <button class="add-cart" onclick="addToCart()">Add to Cart</button>
                </div>
            </div>
        `;
    });
}

function filterCategory(cat) {
    const filtered = products.filter(p => p.category === cat);
    displayProducts(filtered);
}

function addToCart() {
    cart++;
    cartCount.innerText = cart;
}

displayProducts(products);

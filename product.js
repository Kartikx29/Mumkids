// List of products in Rupees
const products = [
    { name: "Red Dress", price: "₹2,000", image: "red-dress.jpg" },
    { name: "Blue Jeans", price: "₹2,400", image: "blue-jeans.jpg" },
    { name: "Black Jacket", price: "₹4,000", image: "black-jacket.jpg" },
    { name: "White Sneakers", price: "₹3,200", image: "white-sneakers.jpg" },
    { name: "Green Shirt", price: "₹1,600", image: "green-shirt.jpg" },
    { name: "Leather Bag", price: "₹4,800", image: "leather-bag.jpg" }
];

// Replace with your WhatsApp number
const whatsappNumber = "919499111369";

// Container for products
const container = document.getElementById("products-container");

// Dynamically create product cards
products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <a href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi, I want to order ' + product.name)}" target="_blank">
            Buy via WhatsApp
        </a>
    `;
    container.appendChild(card);
});
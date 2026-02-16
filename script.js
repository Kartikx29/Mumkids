const products = [
    { name: "Floral Frock", price: "₹2,200", image: "dress.jpg" },
    { name: "Denim Set", price: "₹2,800", image: "denim.jpg" },
    { name: "Party Jacket", price: "₹3,500", image: "jacket.jpg" }
];

const container = document.getElementById("products-container");
const number = "919499111369";

products.forEach(product => {
    container.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <a class="btn-primary" 
               href="https://wa.me/${number}?text=${encodeURIComponent('Hi MumKids, I want to order ' + product.name)}"
               target="_blank">
               Order Now
            </a>
        </div>
    `;
});

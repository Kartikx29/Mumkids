const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdown");
const logo = document.getElementById("logo");
const popup = document.getElementById("welcomePopup");
const searchInput = document.getElementById("searchInput");
const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");

let cart = [];

/* DROPDOWN AUTO CLOSE */
let timer;
menuBtn.onclick = () => {
    dropdown.style.display = "block";
    clearTimeout(timer);
    timer = setTimeout(() => {
        dropdown.style.display = "none";
    }, 20000);
};

/* LOGO CLICK */
logo.onclick = () => {
    logo.classList.add("enlarged");
    popup.style.display = "flex";
};

function closePopup() {
    popup.style.display = "none";
    logo.classList.remove("enlarged");
}

/* PRODUCTS */
const products = [
    {id:1,name:"Kids Jacket",price:999,category:"kids",image:"https://via.placeholder.com/300"},
    {id:2,name:"Men Shirt",price:799,category:"men",image:"https://via.placeholder.com/300"},
    {id:3,name:"Women Dress",price:1499,category:"women",image:"https://via.placeholder.com/300"}
];

const container = document.getElementById("productContainer");

function displayProducts(list) {
    container.innerHTML = "";
    list.forEach(p=>{
        container.innerHTML += `
        <div class="product-card">
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>`;
    });
}

displayProducts(products);

/* SEARCH */
searchInput.addEventListener("input",()=>{
    const value = searchInput.value.toLowerCase();
    const filtered = products.filter(p=>p.name.toLowerCase().includes(value));
    displayProducts(filtered);
});

/* CATEGORY */
function filterCategory(cat){
    const filtered = products.filter(p=>p.category===cat);
    displayProducts(filtered);
}

/* CART */
function addToCart(id){
    const item = cart.find(p=>p.id===id);
    if(item){
        item.qty += 1;
    } else {
        const product = products.find(p=>p.id===id);
        cart.push({...product,qty:1});
    }
    updateCart();
}

function updateCart(){
    cartItems.innerHTML="";
    cart.forEach(p=>{
        cartItems.innerHTML+=`<p>${p.name} x${p.qty}</p>`;
    });
    cartCount.innerText = cart.reduce((sum,p)=>sum+p.qty,0);
}

cartBtn.onclick = ()=> cartSidebar.classList.add("active");
function closeCart(){ cartSidebar.classList.remove("active"); }

/* SCROLL */
function scrollToAbout(){
    document.getElementById("aboutSection").scrollIntoView({behavior:"smooth"});
}
function scrollToTop(){
    window.scrollTo({top:0,behavior:"smooth"});
}

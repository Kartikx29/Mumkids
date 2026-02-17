const menuBtn=document.getElementById("menuBtn");
const dropdown=document.getElementById("dropdown");
const logo=document.getElementById("logo");
const welcome=document.getElementById("welcomeText");
const searchIcon=document.getElementById("searchIcon");
const searchInput=document.getElementById("searchInput");
const cartBtn=document.getElementById("cartBtn");
const cartPanel=document.getElementById("cartPanel");
const cartCount=document.getElementById("cartCount");
const cartItems=document.getElementById("cartItems");
const productSection=document.getElementById("productSection");

let cart=[];
let timer;

/* MENU */
menuBtn.onclick=()=>{
    dropdown.style.display="block";
    clearTimeout(timer);
    timer=setTimeout(()=>{
        dropdown.style.display="none";
    },20000);
};

/* LOGO */
logo.onclick=()=>{
    welcome.style.display="block";
    setTimeout(()=>{
        welcome.style.display="none";
    },3000);
};

/* SEARCH ICON */
searchIcon.onclick=()=>{
    if(searchInput.style.display==="none"){
        searchInput.style.display="block";
        searchInput.focus();
    }else{
        searchInput.style.display="none";
    }
};

/* PRODUCTS */
const products=[
    {id:1,name:"Kids Jacket",price:999,image:"https://via.placeholder.com/300"},
    {id:2,name:"Men Shirt",price:799,image:"https://via.placeholder.com/300"},
    {id:3,name:"Women Dress",price:1499,image:"https://via.placeholder.com/300"}
];

function displayProducts(list){
    productSection.innerHTML="";
    list.forEach(p=>{
        productSection.innerHTML+=`
        <div class="product-card">
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>`;
    });
}

displayProducts(products);

/* SEARCH FUNCTION */
searchInput.addEventListener("input",()=>{
    const value=searchInput.value.toLowerCase();
    const filtered=products.filter(p=>p.name.toLowerCase().includes(value));
    displayProducts(filtered);
});

/* CART */
function addToCart(id){
    const existing=cart.find(p=>p.id===id);
    if(existing){
        existing.qty++;
    }else{
        const product=products.find(p=>p.id===id);
        cart.push({...product,qty:1});
    }
    updateCart();
}

function updateCart(){
    cartItems.innerHTML="";
    cart.forEach(p=>{
        cartItems.innerHTML+=`<p>${p.name} x${p.qty}</p>`;
    });
    cartCount.innerText=cart.reduce((a,b)=>a+b.qty,0);
}

cartBtn.onclick=()=>{
    cartPanel.classList.add("active");
};

function closeCart(){
    cartPanel.classList.remove("active");
}

/* SCROLL */
function scrollAbout(){
    document.getElementById("aboutSection").scrollIntoView({behavior:"smooth"});
}

function scrollHome(){
    window.scrollTo({top:0,behavior:"smooth"});
}

/*==================================================
    APP.JS
    TecnoSoluciones
===================================================*/

// ================================
// CARRITO
// ================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ================================
// ELEMENTOS DEL DOM
// ================================

const productsGrid = document.getElementById("productsGrid");

const searchInput = document.getElementById("searchInput");

const filterButtons = document.querySelectorAll(".filter-btn");

const cartCounter =

    document.getElementById("cart-count");

// ================================
// FORMATO MONEDA
// ================================

function formatPrice(price) {

    return new Intl.NumberFormat("es-CO", {

        style: "currency",

        currency: "COP",

        maximumFractionDigits: 0

    }).format(price);

}

// ================================
// RENDER PRODUCTOS
// ================================

function renderProducts(list = products){

    if(!productsGrid) return;

    productsGrid.innerHTML = "";

    list.forEach(product=>{

        const card=document.createElement("div");

        card.className="product-card";

        card.innerHTML=`

            <div class="product-image">

                <img src="${product.image}" alt="${product.name}">

                <span class="badge">${product.badge}</span>

            </div>

            <div class="product-content">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <ul>

                    ${product.features.map(f=>`<li>${f}</li>`).join("")}

                </ul>

                <div class="product-footer">

                    <span class="price">

                        ${formatPrice(product.price)}

                    </span>

                    <button
                        class="add-cart"
                        data-id="${product.id}">

                        Agregar

                    </button>

                </div>

            </div>

        `;

        productsGrid.appendChild(card);

    });

}

// ================================
// AGREGAR AL CARRITO
// ================================

function addToCart(id){

    const product=products.find(p=>p.id==id);

    if(!product) return;

    const existing=cart.find(item=>item.id==id);

    if(existing){

        existing.quantity++;

    }else{

        cart.push({

            ...product,

            quantity:1

        });

    }

    saveCart();

    updateCounter();

    alert(product.name + " agregado al carrito.");

}

// ================================
// GUARDAR
// ================================

function saveCart(){

    localStorage.setItem("cart",JSON.stringify(cart));

}

// ================================
// CONTADOR
// ================================

function updateCounter(){

    if(!cartCounter) return;

    const total=cart.reduce((sum,item)=>sum+item.quantity,0);

    cartCounter.textContent=total;

}

// ================================
// BUSCADOR
// ================================

if(searchInput){

    searchInput.addEventListener("input",()=>{

        const text=searchInput.value.toLowerCase();

        const result=products.filter(product=>{

            return(

                product.name.toLowerCase().includes(text)

                ||

                product.description.toLowerCase().includes(text)

            );

        });

        renderProducts(result);

    });

}

// ================================
// FILTROS
// ================================

filterButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        filterButtons.forEach(b=>b.classList.remove("active"));

        btn.classList.add("active");

        const category=btn.textContent.trim();

        if(category==="Todos"){

            renderProducts(products);

            return;

        }

        const filtered=products.filter(product=>

            product.category===category

        );

        renderProducts(filtered);

    });

});

// ================================
// CLICK BOTÓN AGREGAR
// ================================

document.addEventListener("click",(e)=>{

    if(e.target.classList.contains("add-cart")){

        const id=e.target.dataset.id;

        addToCart(id);

    }

});

// ================================
// INICIO
// ================================

document.addEventListener("DOMContentLoaded",()=>{

    renderProducts();

    updateCounter();

});

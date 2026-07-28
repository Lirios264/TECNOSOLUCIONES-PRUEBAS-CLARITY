
function actualizarContadorCarrito(cantidad) {
    localStorage.setItem('cartCount', cantidad);
    
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cantidad;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cantidadGuardada = localStorage.getItem('cartCount') || 0;
    
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cantidadGuardada;
    }
});

function agregarAlCarrito() {
    let cantidadActual = parseInt(localStorage.getItem('cartCount')) || 0;
    cantidadActual++;
    actualizarContadorCarrito(cantidadActual);
}
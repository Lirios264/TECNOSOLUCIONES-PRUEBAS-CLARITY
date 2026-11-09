const checkout = document.getElementById("checkout");

checkout.innerHTML = `
<div class="container">
    <h1>Finalizar Compra</h1>

    <form id="checkoutForm">

        <section class="card">
            <h3>Información Personal</h3>

            <input
                type="text"
                id="nombre"
                placeholder="Nombre Completo"
                required
            >

            <input
                type="tel"
                id="telefono"
                placeholder="Número de teléfono"
                required
            >

            <input
                type="email"
                id="correo"
                placeholder="Correo electrónico"
                required
            >
        </section>

        <section class="card">
            <h3>Dirección de Envío</h3>

            <input
                type="text"
                id="direccion"
                placeholder="Dirección Completa"
                required
            >

            <input
                type="text"
                id="ciudad"
                placeholder="Ciudad"
                required
            >

            <input
                type="text"
                id="departamento"
                placeholder="Departamento"
                required
            >
        </section>

        <section class="card">
            <h3>Método de Pago</h3>

            <select id="metodoPago">
                <option>Tarjeta de Crédito/Débito</option>
                <option>PSE</option>
                <option>Pago Contra Entrega</option>
            </select>
        </section>

        <button type="submit">
            Confirmar Pedido
        </button>

    </form>
</div>
`;

document.getElementById("checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const pedido = {
        nombre: document.getElementById("nombre").value,
        telefono: document.getElementById("telefono").value,
        correo: document.getElementById("correo").value,
        direccion: document.getElementById("direccion").value,
        ciudad: document.getElementById("ciudad").value,
        departamento: document.getElementById("departamento").value,
        metodoPago: document.getElementById("metodoPago").value
    };

    console.log(pedido);

    alert("Pedido confirmado correctamente.");
});
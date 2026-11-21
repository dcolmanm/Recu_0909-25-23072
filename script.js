document.addEventListener("DOMContentLoaded", function () {

    let boton = document.getElementById("btnCalcular");

    boton.addEventListener("click", function () {

        let precio     = parseFloat(document.getElementById("precio").value);
        let cantidad   = parseFloat(document.getElementById("cantidad").value);
        let porcentaje = parseFloat(document.getElementById("porcentaje").value) || 0;
        let caja       = document.getElementById("resultado");

        if (isNaN(precio) || isNaN(cantidad)) {
            caja.innerHTML = "Ingresa todos los campos requeridos.";
            return;
        }

        let subtotal   = precio * cantidad;
        let exencion   = subtotal * (porcentaje / 100);
        let totalFinal = subtotal - exencion;

        caja.innerHTML =
            "Subtotal: Q" + subtotal.toFixed(2) + "<br>" +
            "Exención: Q" + exencion.toFixed(2) + "<br>" +
            "<b>Total a pagar: Q" + totalFinal.toFixed(2) + "</b>";
    });
});
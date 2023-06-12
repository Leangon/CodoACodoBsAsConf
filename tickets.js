function calcularTotal() {
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let categoria = document.getElementById("categoria").value;
    let precioBase = 200;

    let descuento = 0;
    if (categoria === "1") {
        descuento = 0.5;
    } else if (categoria === "2") {
        descuento = 0.15;
    } else {
        descuento = 0.8;
    }

    let total = precioBase * cantidad * (1 - descuento)
    let totalResumen = document.getElementById("totalResumen");
    totalResumen.value = total.toFixed(2);
}

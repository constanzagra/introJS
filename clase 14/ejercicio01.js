// Ejercicio 1: Calcular el precio final con IVA
// Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una
// función flecha para calcular el precio final.
const prompt = require('prompt-sync')();

let precioProducto = parseFloat(prompt('Ingrese el precio del producto'));
let ivaProducto = parseFloat(prompt('Ingrese el porcentaje del IVA'));

let calcularPrecioFinal = (precio, iva) => {
    let valorIVA = (precio * iva) / 100;
    let precioFInal = precio + valorIVA;
    return precioFInal;
};
console.log(calcularPrecioFinal(precioProducto, ivaProducto));
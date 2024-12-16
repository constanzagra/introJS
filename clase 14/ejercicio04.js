// Ejercicio 4: Calcular descuento por cantidad
// Solicita al usuario la cantidad de productos comprados y el precio unitario.
// Usa una función flecha para calcular el total con descuento según la cantidad.
const prompt = require('prompt-sync')();

let cantProductos = parseInt(prompt('Cant productos'));
let precioUnitario = parseInt(prompt('Precio'));

const totalConDescuento = (cantidad, precio)=>{
    let descuento1 = (precio * 15) / 100;
    let descuento2 = (precio * 20) / 100;
    let precioFinal1 = (precio - descuento1) * cantidad;
    let precioFinal2 = (precio - descuento2) * cantidad;

    if(cantidad > 3 && cantidad < 10){
        return `El total de su compra es de $${precioFinal1}`;
    } else if(cantidad >= 5 && cantidad <10){
        return `El total de su compra es de $${precioFinal2}`;
    } else{
        return 'Ingrese un valor válido'
    }
};

console.log(totalConDescuento(cantProductos, precioUnitario));
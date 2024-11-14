//Declare la constante q le va a pedir el num al usuario
const prompt = require('prompt-sync')();
//declaro la variable en la q le asigno el valor ingresado y lo convierto a num
let numeroIngresado = parseFloat(prompt("Ingresa un número"));
//Declaro la variable cuyo valor va a ser el ingresado, multiplicandolo x 2
let resultado = numeroIngresado*2;
//imprimo el resultado
console.log("El resultado es ", resultado);
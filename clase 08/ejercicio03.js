const prompt = require('prompt-sync')();
//declaro las 2 variables en las cuales voy a guardar los valores ingresados
let primerValor = parseFloat(prompt("Ingrese el primer valor"));
let segundoValor = parseFloat(prompt("Ingrese el segundo valor"))
//declaro la variable en la cual voy a sumar las 2 anteriores
let suma = primerValor + segundoValor;
//imprimo el resultado
console.log(suma);
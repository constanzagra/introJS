// Ejercicio 4: ¿Es par o impar? 
// Consigna: 
// Los números pueden ser pares o impares. Escribe un programa que le pida al 
// usuario un número y determine si es par o impar. Muestra un mensaje 
// explicativo indicando qué significa cada caso.
const prompt = require('prompt-sync')();

let numero = parseFloat(prompt('Ingresa un número'));
let parOImpar = numero % 2;

parOImpar == 0 ? console.log('El número ingresado es par') : console.log('El numero ingresado es impar');
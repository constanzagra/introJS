// Ejercicio 6: La tabla de multiplicar 
// Consigna: 
// Crea un programa que le pida al usuario un número y luego imprima su tabla de 
// multiplicar desde el 1 hasta el 10. Usa un ciclo for.
const prompt = require('prompt-sync')();

let numero = parseFloat(prompt('Ingrese un número'));
for(i = 1; i <= 10; i++){
    let multiplicacion = numero * i;
    console.log(i)
};
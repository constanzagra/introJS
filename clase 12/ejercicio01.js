// Ejercicio 1: While
// Crea un programa que solicite al usuario ingresar números continuamente
// hasta que el usuario ingrese un número negativo. Luego, imprime la suma
// de todos los números ingresados.
const prompt = require('prompt-sync')();

// let inicio = parseFloat(prompt('Ingrese un número'));
// let numero = 0;

let suma = 0;
let inicio = parseFloat(prompt('Ingrese un número'));
while(inicio >= 0){
    suma += inicio; 
    inicio = parseFloat(prompt('Ingrese un número'));
    if(inicio <= 0){
        console.log(`El resultado de la suma es ${suma}`);
    };
};

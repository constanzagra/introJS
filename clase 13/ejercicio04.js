// Ejercicio 4: Número par o impar
// Crea una función declarada llamada esPar que reciba un número y
// devuelva "Es par" si el número es par o "Es impar" si el número es impar.
// Usa una variable local para guardar el resultado. 
const prompt = require('prompt-sync')();
let numeroIngresado = parseInt(prompt('Ingrese un número'));

function esPar(numero){
    if(numero % 2 == 0){
        return `El nùmero ingresado es par`;
    }else{
        return `El nùmero ingresado es impar`;
    }
};
console.log(esPar(numeroIngresado));
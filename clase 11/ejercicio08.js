// Ejercicio 8: Encuentra los múltiplos de un número 
// Consigna: 
// Escribe un programa que le pida al usuario un número entero positivo y 
// muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for 
// para resolverlo.
const prompt = require('prompt-sync')();

let numero = parseFloat(prompt('Ingrese un número'));
console.log(`Los múltiplos de ${numero} son:`)
for(let i = numero; i <= 100; i++){
    let multiplo = i % numero;
    if(multiplo == 0){
        console.log(i)
    };
};
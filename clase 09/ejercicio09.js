//Define una constante PI con el valor de pi (3.14159). Pide al usuario 
//que ingrese el radio de un círculo y calcula su área y perímetro 
//utilizando la constante PI.

const prompt = require('prompt-sync')();
let radio = parseFloat(prompt("Ingrese el radio"))
let PI = 3.14159;
let perimetro = 2 * PI * radio;
let area = PI * radio^2;
console.log(`El area de su círculo es: ${area} y el perímetro ${perimetro}`);

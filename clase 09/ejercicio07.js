//Ejercicio 7:  
//Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
//libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
//kg a libras, Pista: 2.20462)
const prompt = require('prompt-sync')();
let weightInKg = parseFloat(prompt("Ingresá tu peso en KG"));
let weightInPounds = weightInKg * 2.20462;
console.log(`Su peso en libras es ${weightInPounds} lbs.`);
// Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
// Crea una función expresada llamada convertirCelsiusAFahrenheit que
// reciba una temperatura en grados Celsius y devuelva la temperatura en
// Fahrenheit.
const prompt = require('prompt-sync')();

let temperatura = parseFloat(prompt('Cuántos grados hacen?'));

let convertirCelsiusAFahrenheit = function(grados){
    let fahrenheit = (grados * 9/5) + 32;
    return "La temperatura en farenheit es de " + fahrenheit + " grados"
};
console.log(convertirCelsiusAFahrenheit(temperatura));


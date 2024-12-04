// Ejercicio 6: Convertir a minutos
// Crea una función declarada llamada convertirHorasAMinutos que reciba
// un número de horas como parámetro y devuelva el total en minutos.

const prompt = require('prompt-sync')();

let horasTrabajadas = parseInt(prompt('Ingrese la cantidad de horas trabajadas'));

function convertirHorasAMinutos (horas){
    let minutos = horas * 60;
    return "Trabajaste " + minutos + " minutos";
};

console.log(convertirHorasAMinutos(horasTrabajadas));
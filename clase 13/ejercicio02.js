// Ejercicio 2: Número mayor (función expresada)
// Crea una función expresada llamada encontrarMayor que reciba dos
// números como parámetros y devuelva el número mayor. 

const prompt = require('prompt-sync')();

let numeroA = parseInt(prompt('Ingrese el primer número'));
let numeroB = parseInt(prompt('Ingrese el segundo número'));

let encontrarMayor = function (numero1, numero2){
    if(numero1 > numero2){
        return `El numero mayor es ${numero1}`;
    }else{
        return `El numero mayor es ${numero2}`;
    }
};

console.log(encontrarMayor(numeroA, numeroB));
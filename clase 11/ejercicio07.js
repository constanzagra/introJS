// Ejercicio 7: Calculadora simple 
// Consigna: 
// Crea un programa que le pida al usuario dos números y una operación 
// matemática a realizar: suma, resta, multiplicación o división. Según la operación 
// ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario 
// ingresa una operación inválida, el programa debe mostrar un mensaje de error. 
// Usa switch para resolverlo.
const prompt = require('prompt-sync')();

let primerNumero = parseFloat(prompt('Ingrese el primer número'));
let segundoNumero = parseFloat(prompt('Ingrese el segundo número'));
let operación = prompt('Ingrese la operaciòn que queira realizar').toLowerCase();

switch(operación){
    case "suma":
        console.log(`El resultado es: ${primerNumero + segundoNumero}`);
    break;
    case "resta":
        console.log(`El resultado es: ${primerNumero - segundoNumero}`);
    break;
    case "multiplicacion":
        console.log(`El resultado es: ${primerNumero * segundoNumero}`);
    break;
    case "division":
        console.log(`El resultado es: ${primerNumero / segundoNumero}`);
    break;
    default:
        console.log("Ingrese una operacion valida");
};
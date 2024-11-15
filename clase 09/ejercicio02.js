//Ejercicio 2:  
//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
//valores numéricos de tu elección. Pide al usuario que ingrese un 
//número y verifica si está dentro del rango definido por las constantes.

const prompt = require('prompt-sync')();

const RANGO_MINIMO = 1;
const RANGO_MAXIMO = 100;
let numeroIngresado = parseFloat(prompt("Ingrese un número"));
if(numeroIngresado > RANGO_MINIMO && numeroIngresado < RANGO_MAXIMO){
    console.log("Su número está dentro del rango")
}else{
    console.log("Su número está fuera del rango esperado")
}
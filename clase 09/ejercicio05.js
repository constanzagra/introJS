//Ejercicio 5: 
//Escribe un programa que pida al usuario que ingrese tres números y 
//determine cuál es el mayor de los tres. 

const prompt = require('prompt-sync')();
//Declaro una variable para cada número ingresado
let numero1 = parseFloat(prompt("Ingrese el primer número"));
let numero2 = parseFloat(prompt("Ingrese el segundo número"));
let numero3 = parseFloat(prompt("Ingrese el tercer número"));
//Declaro una variable para asignarle el valor del número mayor
let numeroMayor;
//Comparo los valores ingresados entre sí para saber cual es el mayor.
if(numero1 > numero2 && numero1 > numero3){
    numeroMayor = numero1
}else if(numero2 > numero1 && numero2 > numero3){
    numeroMayor = numero2
}else{
    numeroMayor = numero3
};
console.log((`El número mayor es: ${numeroMayor}`))
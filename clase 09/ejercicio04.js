//Ejercicio 4:  
//Declara una variable nombre y pide al usuario que ingrese su nombre. 
//Verifica si el nombre ingresado es igual a tu nombre.
const prompt = require('prompt-sync')();
let nombre = prompt("Ingrese su nombre").toLowerCase();
let miNombre = "constanza";
if(nombre == miNombre){
    console.log("Ay boluda yo me llamo igual")
}else{
    console.log("que feo nombre!")
}
//Ejercicio 6:  
//Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
//edad. Muestra un mensaje personalizado según el caso.

const prompt = require('prompt-sync')();
let age = parseFloat(prompt("Cuántos años tenes?"))
if(age >= 18){
    console.log("Podes pasar")
}else{
    console.log("Sali de acá")
};
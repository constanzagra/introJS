// Ejercicio 3: Clasificación de edades
// Solicita al usuario una edad y usa una función flecha para clasificarla en niño,
// adolescente, adulto o adulto mayor.
const prompt = require('prompt-sync')();

let edad = parseInt(prompt('Ingrese su edad'));
let clasificarEdad = (edad) =>{
    if(edad > 0 && edad < 13){
        return 'Niño';
    }else if(edad >= 13 && edad < 20){
        return 'Adolescente';
    }else if(edad >= 20 && edad < 60){
        return 'Adulto';
    }else{
        return 'Adulto mayor'
    }
};
console.log(clasificarEdad(edad));
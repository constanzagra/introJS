// • Ejercicio 2: Calcular promedio de calificaciones
// Solicita al usuario cinco calificaciones y usa una función flecha para calcular
// el promedio.
const prompt = require('prompt-sync')();

let sumaCalificaciones = 0;
let calcularPromedio = () =>{
    for(let i = 0; i < 5; i++){
        let calificacion = parseFloat(prompt("Ingrese la calificación: "));
        sumaCalificaciones += calificacion;
    }
    let promedio = sumaCalificaciones / 5;
    return promedio;
};
console.log(calcularPromedio());
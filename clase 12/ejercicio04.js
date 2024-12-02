// Ejercicio 4: Ciclo For - Array
// Crear un programa que permita registrar las notas de varios estudiantes
// usando arrays y mostrarlas por pantalla:
// 1. Crear un array para almacenar las notas.
// 2. Define un array vacío llamado notas donde almacenaremos las notas
// de los estudiantes.
// 3. Pide al usuario que ingrese las notas de varios estudiantes una por
// una utilizando el método prompt.
// 4. Usa un bucle for para solicitar las notas y asignarlas directamente a
// posiciones específicas del array notas.
// 5. Imprime en consola las notas ingresadas usando el array notas. 
const prompt = require('prompt-sync')();
let notaIngresada;
let notas = [];
//No sabia hasta donde llevar el bucle, así que defini 10 como condición (asumiendo q son 10 alumnos).
for(let i = 0; i <= 10; i++){
    notaIngresada = parseFloat(prompt('Ingrese la nota'));
    notas.push(notaIngresada)
};
console.log(`Las notas de 3A son: ${notas}`);
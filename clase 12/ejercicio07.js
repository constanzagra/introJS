// Ejercicio 7: Matriz 5x5
// Declara una variable que contenga una matriz de 5x5 llena de puros
// números enteros y positivos. Luego, escribe un algoritmo para sumar
// todos los números en la matriz.
const matriz = [
    [30, 11, 19, 98, 3],
    [4, 9, 19, 69, 7],
    [8, 12, 19, 70, 5],
    [30, 10, 20, 18, 1],
    [13, 29, 12, 8, 74]
];
let suma = 0;

for(let y = 0; y < matriz.length; y++){
    for(let x = 0; x < matriz[y].length; x++){
        suma += matriz[y][x]
    }
}; console.log(suma)
// Ejercicio 6: Iguales a 10 pero menores de 1000
// Dada una matriz, recorrer sus valores y sumar solo los números que estén
// por encima o sean iguales a 10, pero menores que 1000.
const matriz = [
    [10, 3, 2, 1, 4, 7], //0 +10
    [5, 5, 10, 100, 4],//1 + 10 +100 => 20 / 120
    [5, 125, 10, 1020, 4], //2 
    [5, 5, 5097, 100,4] // 3
];
let suma = 0;
//matriz[0][0]
for(let y = 0; y < matriz.length; y++){
    for(let x = 0; x < matriz[y].length; x++){
        if(matriz[y][x] >= 10 && matriz[y][x] < 1000){
            suma += matriz[y][x];
        };
    };
};
console.log(suma);


//machete
// for(let fila = 0; fila < matriz.length; fila++){
//     for(let col = 0; col < matriz[fila].length; col++){
//         console.log(matriz[fila][col]);
//     }
// };
// Ejercicio 8: Rojo y Verde
// Para este ejercicio vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único. Rojo: 505
// Verde 505
// IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el
// método “push” en los Arrays. ¡Este método lo veremos en las próximas
// clases, pero si desean pueden investigarlo para resolver este desafío!

const matriz = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];
let rojo = [];
let verde = [];

for(let r = 0; r < matriz.length; r++){
    rojo.push(matriz[r][r]);
};
console.log(rojo)

for (let v = 0; v < matriz.length; v++) {
    let col = matriz.length - v -1; 
    verde.push(matriz[v][col]);
};
console.log(verde)

sumaRojo = 0;
sumaVerde = 0;

for(let i = 0; i < rojo.length && verde.length; i++){
    sumaRojo += rojo[i]
    sumaVerde += verde[i]
}; 
console.log(`La suma de la diagonal roja es ${sumaRojo}
    y la suma de la diagonal verde es ${sumaVerde}.`);

// /console.log(matriz.length) = 10 || 9 posiciones (0 - 9)
// /Primeros intentos
// / let col = matriz.length - v; // Índice inverso 
// /     verde.push(matriz[v][col]);
// / for(let v = 0; v < matriz.length; v++){
// /     for(let col = 9; col >= 0; col--){
// /         verde.push(matriz[v][col])
// /     };
// / };

// / for(let v = 9; v >= 0; v--){
// /     verde.push(matriz[v][v])
// / };
// / console.log(verde)

// / for(let c = 0; c < matriz[f].length; c++){
// /     if(matriz.indexOf(matriz[f]) == matriz.indexOf([f][c])){
// /        rojo.push[matriz[f][c]]
// /     }
// / };
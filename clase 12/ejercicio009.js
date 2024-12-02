// Ejercicio 9: Última aparición de un modelo de auto
// Se está realizando el desarrollo de una aplicación para control de
// gastos. Cada día, el usuario ingresa sus gastos cotidianos.
// La idea es solo registrar el total de los gastos, al finalizar la jornada.
// Para simplificar, vamos a considerar que todos los meses tienen cuatro
// semanas.
// Los gastos estarán en una matriz de 4x7, cada fila representa una
// semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana
// 2, etc. Columna 0, día 1, columna 1, día 2, etcétera.
// a) Lo que nos solicitan es dar el total de gastos en una semana.
// Recordemos que cada fila representa una semana, es decir, si nos
// indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar
// que las matrices comienzan siempre en posición 0.
// b) La aplicación también tendrá una parte de estadísticas, para esto
// nos solicitan dar el total de un día en particular, por ejemplo del día
// 3, acá también tengamos en cuenta lo que ocurre con las filas, ya
// que las columnas también comienzan en 0.
// c) Por último, es necesario tener el total de gastos realizados en el
// mes.
// ✓ Pregunta para pensar, ¿es lo mismo recorrer por filas o por
// columnas para resolver este último punto?
// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el
// día que más gastos se realizaron
const prompt = require('prompt-sync')();
// const matriz = [
//     [],
//     [],
//     [],
//     []
// ];
// let sumaSemanal = 0;
// let totalMensual = 0;
// for(let i = 0; i < matriz.length; i++){
//     for(let x = 1; x <= 7; x++){
//         let gastos = parseFloat(prompt(`Ingrese los gastos del día ${x} de la semana ${i + 1}`));
//         matriz[i].push(gastos);
//         sumaSemanal += gastos; 
//     }; 
//     console.log(`Esta semana gastaste $${sumaSemanal}`);
//     totalMensual += sumaSemanal;
//     sumaSemanal = 0;
// };
// console.log(`Tus gastos mensuales fueron ${totalMensual}`)

////////////////Mismo coso con la matriz ya ingresada
let matriz2 = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];

let sumaSemanal2 = 0;
let totalMensual2 = 0;
let finalSemanal = [];
let gastoMayor = 0;
for(let i = 0; i < matriz2.length; i++){
    for(let y = 0; y < matriz2[i].length; y++){
        sumaSemanal2 += matriz2[i][y]
    };
    console.log(`Esta semana gastaste $${sumaSemanal2}`);
    totalMensual2 += sumaSemanal2;
    finalSemanal.push(sumaSemanal2)
    sumaSemanal2 = 0;
};


for(let i = 0; i < finalSemanal.length; i++){
    if(finalSemanal[i] > gastoMayor){
        gastoMayor = finalSemanal[i]
    }
};
console.log(gastoMayor);

diasDelMes = [];
diaMasCaro = 0;
for(let i = 0; i < matriz2.length; i++){
    for(let d = 0; d < matriz2[i].length; d++){
        diasDelMes.push(matriz2[i][d])
    };
};
for(let d = 0; d < diasDelMes.length; d ++){
    if(diasDelMes[d] > diaMasCaro){
        diaMasCaro = diasDelMes[d]
    };
};
console.log(diaMasCaro);

//console.log(`Tus gastos mensuales fueron ${totalMensual2}`)




// let semana = parseFloat(prompt('Ingresa el numero de semana de la que quieras saber tus gastos')) - 1;
// let dia = parseFloat(prompt('Ingresa el numero del dia del que quieras saber tus gastos')) - 1;
// if(semana < matriz.length && dia < matriz[semana].length){
//     console.log(`El dia ${dia} de la semana ${semana}, gastaste ${matriz[semana][dia]}`);
// }else{
//     console.log("Ingrese un número de semana del 1 al 4 y un número de día del 1 al 7");
//     semana = parseFloat(prompt('Ingresa el numero de semana de la que quieras saber tus gastos'));
//     dia = parseFloat(prompt('Ingresa el numero del dia del que quieras saber tus gastos'));
// };

// for(let i = 0; i < matriz.length; i++){
//     for(let y = 0; y < matriz[i].length; y++){
//         if(semana == matriz[i] && dia == matriz[semana][y]){
//             console.log(`El dia ${dia} de la semana ${semana}, gastaste ${matriz[semana][dia]}`)
//         }
//     }
// }
// if(matriz[i].length == 7){
//     sumaSemanal += matriz[i][x -1];
//     console.log(`Esta semana gastaste $${sumaSemanal}`);
//     totalMensual += sumaSemanal;
// };
// if(matriz.length == 4 && matriz[i].length == 7){
//     console.log(`Tus gastos mensuales fueron ${totalMensual}`)
//     break;
// }
//Ejercicio 9: Última aparición de un modelo de auto
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
let matriz = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];

console.log("Qué querés saber?");
console.log("1- El total de una semana");
console.log("2- Los gastos de un día");
console.log("3- Gastos mensual ");
console.log("4- Día y semana con los gastos más altos");
let opcion = parseInt(prompt("Selecione una opción"));

let sumaSemanal = 0;
let totalMensual = 0;
let finalSemanal = [];
let gastoMayor = 0;
let diasDelMes = [];
let diaMasCaro = 0;

for(let i = 0; i < matriz.length; i++){
    for(let d = 0; d < matriz[i].length; d++){
        diasDelMes.push(matriz[i][d])
    };
}; 

switch(opcion){
    case 1:
        let semana = parseInt(prompt('Ingrese el número de la semana que quiera saber'));
        for(let s = 0; s < matriz.length; s++){
            for(let d = 0; d < matriz[s].length; d++){
                sumaSemanal += matriz[s][d]
            }
            finalSemanal.push(sumaSemanal)
            sumaSemanal = 0;
        }
        console.log(`En la semana ${semana} gastaste: $${finalSemanal[semana - 1]}`);
    break;
    case 2:
        let dia = parseInt(prompt('Ingrese el día del mes del que quiera conocer el total'));
        let gastoDia = dia - 1;
        if(dia > 0 && dia < 28){
            console.log(`El día ${dia} gastaste ${diasDelMes[gastoDia]}`);
        };
    break;
    case 3:
        for(let i = 0; i < diasDelMes.length; i++){
            totalMensual += diasDelMes[i]
        };
        console.log(`Este mes gastaste $${totalMensual}`);
    break;
    case 4:
        for(let s = 0; s < matriz.length; s++){
            for(let d = 0; d < matriz[s].length; d++){
                sumaSemanal += matriz[s][d]
            }
            finalSemanal.push(sumaSemanal)
            sumaSemanal = 0;
            for(let i = 0; i < finalSemanal.length; i++){
                if(finalSemanal[i] > gastoMayor){
                    gastoMayor = finalSemanal[i]
                }
            };
        };
        console.log(`La semana en la que más gastaste, gastaste ${gastoMayor}`)
        for(let d = 0; d < diasDelMes.length; d ++){
            if(diasDelMes[d] > diaMasCaro){
                diaMasCaro = diasDelMes[d]
            };
        };
        console.log(`El día que más gastaste, gastaste ${diaMasCaro}`);
}; 
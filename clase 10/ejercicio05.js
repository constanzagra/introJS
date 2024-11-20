// Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores 
// iniciales y luego intercambia sus valores. Muestra los valores antes y 
// después del intercambio en la consola. 
// Para intercambiar valores puedes usar varios métodos(usando una 
// variable temporal, aritmética o asignación simultanea), eres libre de 
// elegir el que desees, eso si, investiga sobre el que usaras. 

//1. Declarar dos variables
let variable1 = 'No tengo idea';
let variable2 = 'Ah, ya entedí.';
console.log(`${variable1} o ${variable2}`);

// variable1 = 'Ah, ya entedí.';
// variable2 = 'No tengo idea';
// console.log(`${variable1} o ${variable2}`);

let temporal = variable1;
variable1 = variable2;
variable2 = temporal;
console.log(`${variable1} o ${variable2}`);
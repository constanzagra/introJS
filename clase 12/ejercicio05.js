// Ejercicio 5: Uso de Arrays y Condicionales
// Crea un programa que solicite al usuario ingresar 5 nombres y los
// almacene en un array. Luego, solicita al usuario ingresar un nombre y
// verifica si ese nombre se encuentra en el array. (Pueden desglosar en
// pasos el código si eso les facilita su desarrollo) 
const prompt = require('prompt-sync')();
let nombres = [];
let nombreIngresado;
for(let i = 5; i > 0; i--){
    nombreIngresado = prompt("Ingrese un nombre");
    nombres.push(nombreIngresado);

};
let verificarNombre = prompt('Verifique si se encuentra en la lista');
if(nombres.includes(verificarNombre)){
    console.log(`${verificarNombre}, podes pasar`);
}else{
    console.log(`Lo siento, ${verificarNombre}, no estás en la lista`);
};
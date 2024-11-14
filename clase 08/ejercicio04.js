//Ejercicio 4
const prompt = require('prompt-sync')();
let ingreseNumero = parseFloat(prompt("Ingresa un número"));
//declaro la variable que va a calcular si el numero es o no par
let parOImpar = ingreseNumero % 2;
//declaro la variable en la cual voy a guardar el resultado
let = resultado = '';
//Inicio un condicional que va a evaluar si el resultado es par o impar
if(parOImpar === 0){
    resultado = 'El numero ingresado es par'
}else if(parOImpar != 0){
    resultado = 'El número ingresado es impar'
}else{
    resultado = 'Ingrese un número entero'
};

//imprimo el resultado
console.log(resultado)
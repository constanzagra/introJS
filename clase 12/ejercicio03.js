// Ejercicio 3: Ciclo For
// Nuestra tarea es contar la cantidad de números impares que hay desde
// el número 0 hasta un número X (inclusive). Para esto, debes seguir los
// siguientes pasos:
// 1. Solicitar al usuario que ingrese un número X.
// 2. Inicializar una variable para contar los números impares.
// 3. Utilizar un ciclo for para recorrer los números desde 0 hasta X
// (inclusive).
// 4. Dentro del ciclo, verificar si el número es impar.
// 5. Si el número es impar, incrementar el contador de números
// impares.
// 6. Al finalizar el ciclo, imprimir en consola la cantidad de números
// impares encontrados.
// 7. Utiliza el operador módulo (%) para verificar si un número es
// impar.
// 8. Ejemplo de Ejecución: Si el usuario ingresa 10, el programa debe
// imprimir: “La cantidad de números impares desde 0 hasta 10
// (inclusive) es: 5”
const prompt = require('prompt-sync')();
let numeroIngresado = parseFloat(prompt('Ingrese un número'));
let numerosImpares = 0;
for(let i = 0; i <= numeroIngresado; i++){
    let esImpar = i % 2;
    if(esImpar !== 0){
        numerosImpares += 1;
    };
};
console.log(`La cantidad de nùmeros impares desde 0 a ${numeroIngresado} es: ${numerosImpares}`);
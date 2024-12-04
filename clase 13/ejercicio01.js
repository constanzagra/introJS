// Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista)
// Crea una función declarada llamada calcularAreaTriangulo que reciba dos
// parámetros: la base y la altura de un triángulo. La función debe devolver el
// área del triángulo.
// Pista: Usa la fórmula: 

const prompt = require('prompt-sync')();
let base = parseInt(prompt('Ingrese la base del triángulo'));
let altura = parseInt(prompt('Ingrese la altura del triángulo'));

function calcularAreaTriangulo(base, altura){
    let area = (base * altura) / 2;
    return area;
};
console.log(calcularAreaTriangulo(base, altura));
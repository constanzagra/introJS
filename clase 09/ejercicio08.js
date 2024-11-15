//Pide al usuario que ingrese las longitudes de los tres lados de un 
//triángulo. Determina y muestra si el triángulo es equilátero, isósceles o
//escaleno. (Investiga sobre los triángulos para determinar la formula)
const prompt = require('prompt-sync')();
let lado1 = parseFloat(prompt("Ingrese la longitud del primer lado"));
let lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado"));
let lado3 = parseFloat(prompt("Ingrese la longitud del tercer lado"));
let triangulo;

if(lado1 == lado2 && lado2 == lado3){
    triangulo = "Equilátero"
}else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
    triangulo = "Isósceles"
}else{
    triangulo="Escaleno"
};
console.log(`Tu triángulo es ${triangulo}`);
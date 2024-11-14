const prompt = require('prompt-sync')();
//declaro la variable en la q le asigno el valor ingresado y lo convierto a num
let valorIngresado = parseFloat(prompt("Ingresa un número"));

if(valorIngresado > 0){
    console.log("El número es positivo")
}else if(valorIngresado < 0){
    console.log("El número es negativo")
} else{
    console.log("El número ingresado es 0")
};

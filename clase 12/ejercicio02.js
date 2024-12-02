// Ejercicio 2: Do While
// Escribe un programa que solicite al usuario ingresar una contraseña. Si la
// contraseña es incorrecta, debe volver a pedirla hasta que el usuario
// ingrese la correcta. La contraseña correcta es "1234"}
const prompt = require('prompt-sync')();

let password = 1234;
let userPasword;
do{
    userPasword = parseFloat(prompt("Ingrese su contraseña"));
    if(userPasword === password){
        console.log("Estas dentro")
    }else{
        console.log('Contraseña incorrecta');
    };
}while(userPasword != password);
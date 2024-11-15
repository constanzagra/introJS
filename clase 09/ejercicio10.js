//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
//semana correspondiente. Si el número no está dentro de ese rango, 
//muestra un mensaje de error.
const prompt = require('prompt-sync')();
let diaIngresado = parseFloat(prompt("Ingrese un número del 1 al 7"));
let diaDeLaSemana;
if(diaIngresado === 1){
    diaDeLaSemana = "Lunes" 
}else if(diaIngresado === 2){
    diaDeLaSemana = "Martes"
}else if(diaIngresado === 3){
    diaDeLaSemana = "Miércoles"
}else if(diaIngresado === 4){
    diaDeLaSemana = "Jueves"
}else if(diaIngresado === 5){
    diaDeLaSemana = "Viernes"
}else if(diaIngresado === 6){
    diaDeLaSemana = "Sábado"
}else if(diaIngresado === 7){
    diaDeLaSemana = "Domingo"
}else{
    diaDeLaSemana = "Ingrese un número válido"
};
console.log(`El día de la semana es ${diaDeLaSemana}`);
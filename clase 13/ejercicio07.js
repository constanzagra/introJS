// Ejercicio 7: Mensaje según la hora
// Declara una variable global llamada horaActual (puedes asignarle un valor
// fijo). Crea una función declarada llamada mostrarSaludo que imprima
// "Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o
// "Buenas noches" en cualquier otro caso
const prompt = require('prompt-sync')();

let horaActual = parseFloat(prompt('Ingresa la hora en fomrato 24hs'));

function mostrarSaludo(hora){
    if(hora >= 0 && hora <= 24){
        if(hora <= 12){
            return "Buenos días";
        }else if(hora > 12 && hora <= 19){
            return "Buenas tardes";
        }else{
            return "Buenas noches";
        }
    }else{
        return "Ingrese un horario válido"
    };
};

console.log(mostrarSaludo(horaActual));

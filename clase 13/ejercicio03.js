// Ejercicio 3: Mensaje global y local
// Declara una variable global llamada saludoGlobal con el valor "Hola desde
// el scope global". Luego, crea una función llamada mostrarMensaje que
// declare una variable local llamada saludoLocal con el valor "Hola desde el
// scope local" y que imprima ambos mensajes. 
let saludoGlobal = 'Holis desde afuera';

function mostrarMensaje(){
    let saludoLocal = 'Holi desde adentro de la función';
    console.log(saludoGlobal);
    return saludoLocal;
};
console.log(mostrarMensaje());
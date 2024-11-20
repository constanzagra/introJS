//• Ejercicio 1 - Declarar dos variables:  
//Nuestra tarea será declarar dos variables: una con el nombre edad y la 
//otra con el nombre peso. Después deberás asignarle un valor. 
//Pista: Recordemos que para crear una variable debemos utilizar la 
//palabra reservada "let", seguida del nombre con el cual luego le 
//haremos referencia.

//Ejercicio 2 – Usando las variables:  
//Escribe un programa que pida al usuario que ingrese su nombre, su 
//edad y su peso, y luego muestre un mensaje personalizado que incluya 
//toda esta información. 
//Desglosando el ejercicio deberás: 
//1.. Pide al usuario que ingrese su nombre. 
//2. Pide al usuario que ingrese su edad. 
//3. Pide al usuario que ingrese su peso. 
//4. Muestra un mensaje personalizado que incluya el nombre, la edad 
//y el peso del usuario. 
//Pista: En el ejercicio anterior, declaramos valores en las variables. 
//Ahora nos toca pedir datos al usuario, por lo que usaremos prompt
//sync para solicitar esta información.

//Ejercicio 3 – Constantes / Validación de Edad:  
//Más adelante vamos a querer validar que nuestros encuestados sean de 
//18 años de edad mínima y 99 años de edad máxima.  
//Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas 
//en dos constantes (asignándoles los valores numéricos 18 y 99 
//respectivamente). Por último, Deberás pedirle al usuario que ingrese su 
//edad para validarla usando parseInt. 
//Desglosando el ejercicio deberás:

//1. Crea una constante llamada EDAD_MINIMA y otra llamada 
//EDAD_MAXIMA, a las cuales les asignarás los valores numéricos 18 
//y 99 respectivamente. 
//2. Pide al usuario que ingrese su edad. 
//3. Usa “parseInt” para convertir la entrada del usuario a un número 
//entero. 
//4. Valida si la edad ingresada está dentro del rango permitido y 
//muestra un mensaje adecuado.

const prompt = require('prompt-sync')();
let nombre = prompt('Ingrese su nombre');
let edad = parseInt(prompt('Ingresesu edad'));
let peso = parseFloat(prompt('Ingrese su peso'));
const edad_minima = 18;
const edad_maxima = 99;

if(edad < edad_minima || edad > edad_maxima){
    console.log('Su edad está fuera del rango etario que estamos buscando')
}else{
    console.log(`Nombre: ${nombre} Edad: ${edad} Peso${peso} `);
};




// Ejercicio 5: Verificar origen del auto
// Solicita al usuario ingresar la marca de un auto y utiliza una función flecha
// para verificar y mostrar si el auto es de origen nacional o importado. Considera
// que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen
// nacional.
// ✓ Solicita al usuario que ingrese la marca de un auto.
// ✓ Utiliza una función flecha para determinar si la marca ingresada
// corresponde a un auto de origen nacional o importado.
// ✓ Muestra un mensaje indicando si el auto es de origen nacional o
// importado, basado en la marca ingresada por el usuario.
const prompt = require('prompt-sync')();

let marca = prompt('Ingrese la marca de su auto').toLowerCase();
const identificarMarca = (marca) =>{
    if(marca == 'chevrolet' || marca == 'ford' || marca == 'fiat'){
        return 'El auto es de origen nacional';
    }else{
        return 'El auto es importado';
    }
};

console.log(identificarMarca(marca));

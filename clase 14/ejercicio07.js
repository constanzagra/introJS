// Ejercicio 7: Libros
// Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
// ✓ título: una cadena con el título del libro.
// ✓ autor: una cadena con el nombre del autor del libro.
// ✓ anioPublicacion: un número con el año de publicación del libro.
// Luego, crea una función llamada mostrarLibro que tome un arreglo de libros
// como parámetro y muestre por consola la información de cada libro en el
// formato especificado.

let libro1 = {
    titulo: 'Las cosas que perdimos en el fuego',
    autor: 'Mariana Enriquez',
    anioPublicacion: 2016
};

let libro2 = {
    titulo: 'Los días de noche',
    autor: 'Silvina Ocampo',
    anioPublicacion: 1970
};

let biblioteca =[
    libro1,
    libro2
];

function mostrarLibro(biblioteca){
    for(let i = 0; i < biblioteca.length; i++){
        let libro = biblioteca[i];
        console.log(`${libro.titulo} fue publicado en el año ${libro.anioPublicacion} y su autora es ${libro.autor}`)
    }
};
mostrarLibro(biblioteca);
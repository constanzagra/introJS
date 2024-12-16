// Encuentra la película más corta y analiza los títulos largos 
// Supón que tienes una lista de películas con su duración en minutos: 
// const movies = [ 
// { title: 'El Señor de los Anillos', duration: 200 }, 
// { title: 'Inception', duration: 148 }, 
// { title: 'Matrix', duration: 136 }, 
// { title: 'Toy Story', duration: 81 }, 
// { title: 'Coco', duration: 105 } 
// ]; 
// Queremos: 

const movies = [ 
    { title: 'El Señor de los Anillos', duration: 200 }, 
    { title: 'Inception', duration: 148 }, 
    { title: 'Matrix', duration: 136 }, 
    { title: 'Toy Story', duration: 81 }, 
    { title: 'Coco', duration: 105 } 
];
// o Encontrar la película más corta en duración. 
let shorterMovie = movies.reduce(function(shortest, movie){
    if (movie.duration < shortest.duration){
        return movie
    }else{
        return shortest
    }
});
console.log(shorterMovie)

// o De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 caracteres. 
let findingTheLongerTitles = movies.filter(function(movie){
    return movie.title.length > 10
});
console.log(findingTheLongerTitles)

// o Crear una lista de los títulos largos en minúsculas. 
let titlesToLowerCase = findingTheLongerTitles.map(function(movie){
    return movie.title.toLowerCase()
});
titlesToLowerCase.join();

// o Imprime en la consola: 
// o El título de la película más corta. 
// o La lista de títulos largos en minúsculas.
console.log(`La pelicula de menor duración es ${shorterMovie.title} con ${shorterMovie.duration} minutos
    y la película con el título más largo es ${titlesToLowerCase}.`);
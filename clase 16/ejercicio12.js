// Calcula el total de ventas de productos seleccionados 
// Supón que tienes una lista de productos con sus precios en formato de 
// objeto: 
// const products = [ 
// { name: 'Laptop', price: 1000 }, 
// { name: 'Mouse', price: 25 }, 
// { name: 'Teclado', price: 50 }, 
// { name: 'Monitor', price: 200 }, 
// { name: 'Audífonos', price: 75 } 
// ]; 
// Queremos: 

const products = [ 
    { name: 'Laptop', price: 1000 }, 
    { name: 'Mouse', price: 25 }, 
    { name: 'Teclado', price: 50 }, 
    { name: 'Monitor', price: 200 }, 
    { name: 'Audífonos', price: 75 } 
]; 

// o Seleccionar los productos cuyo precio sea mayor o igual a 50. 
let filterByPrice = products.filter(function(product){
    return product.price >= 50
});
console.log(filterByPrice)

// o Obtener solo los nombres de esos productos. 
let productName = products.map(function(product){
    return product.name
});
productName = productName.join(", ")
console.log(productName);

// o Calcular el precio total sumando los precios de los productos seleccionados
let totalPrice = filterByPrice.reduce(function(acum, product){
    return acum + product.price
}, 0);
console.log(totalPrice);

//o Imprime el total y los nombres de los productos seleccionados en la consola.
console.log(`El total de los productos ${productName} es de $${totalPrice}`);
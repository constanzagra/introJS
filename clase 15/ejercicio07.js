// • Ejercicio 7: Verificar si una lista contiene un elemento 
// Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si 
// "Sushi" está en la lista y muestra un mensaje que confirme si está o no.
let menu = ["Pizza", "Hamburguesa", "Tacos"];
let finder = menu.includes("Sushi");
if(finder == true){
    console.log("Hay sushi")
}else{
    console.log("No hay sushi en este menú")
};
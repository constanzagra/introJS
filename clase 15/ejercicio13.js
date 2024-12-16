// Simulador de una cola de atención al cliente 
// Simula una cola de atención al cliente donde los clientes llegan y son 
// atendidos uno por uno. Tienes una lista inicial de clientes en espera y un 
// bucle que los atiende de a uno. Realiza lo siguiente: 
// 1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo 
// por consola. 
// 2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando 
// un mensaje especial. 
// 3. Al final, muestra cuántos clientes fueron atendidos en total. 
// Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].
let listaDeClientesInicial = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let contadorDeClientes = 0;

while(listaDeClientesInicial.length > 0){
    let clienteActual = listaDeClientesInicial.shift()

    if(clienteActual === "VIP"){
        console.log(`El cliente actual es VIP y tiene prioridad`);
    }else{
    console.log(`Turno de cliente: ${clienteActual}`)
    }
    contadorDeClientes += 1;
};
console.log(`Hoy se han atendido a ${contadorDeClientes} clientes`);
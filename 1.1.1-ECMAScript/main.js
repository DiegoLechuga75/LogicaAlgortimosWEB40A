const suma = (a, b) => a + b;

console.log(suma(5,5));

const numeros = [17,23,35,41,59,64,77,85,91];
const nombres = ["Diego", "Ana", "Lalo", "Alan", "Angel"];

numeros.forEach(function(item, index){
    console.log(item + 1);
})

const mensajes = nombres.map((userName) => {
    const mensaje = `Hola este es un correo para ${userName}`;
    console.log(mensaje);
    return mensaje;
})

const nuevosNumeros = numeros.map((number) => number*2)

console.log(nuevosNumeros);

console.log(mensajes);

const elements = mensajes.map((mensaje) => `<h1 class="message">${mensaje}</h1>`);

console.log(elements);

const messageContainer = document.querySelector(".message-container");

elements.forEach((element) => {
    messageContainer.insertAdjacentHTML("beforeend", element);
})

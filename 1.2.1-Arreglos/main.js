const persona = {
    nombre: "Diego",
    edad: 21,
    esMayorEdad: true,
    saludar: function(){
        console.log(`Hola me llamo: ${this.nombre}`);
    }
}

persona.saludar();
console.log(persona);

const persona2 = Object.create(persona);
persona2.nombre = "Alan";
persona2.edad = 22;
persona2.saludar();
console.log(persona2);

const persona3 = Object.assign(persona);

console.log(persona3);


const numbers = [1,2,3,4,5,6];
console.log(numbers);

const newNumbers = Array.from(numbers);
console.log(newNumbers);

const frutas = ["Kiwi", "Platano", "Manzana"];
console.log(frutas, `En este momento hay: ${frutas.length} frutas en mi arreglo`);
frutas.shift();
console.log(frutas, `En este momento hay: ${frutas.length} frutas en mi arreglo`);
frutas.unshift("Fresa");
console.log(frutas, `En este momento hay: ${frutas.length} frutas en mi arreglo`);

frutas.pop();
console.log(frutas, `En este momento hay: ${frutas.length} frutas en mi arreglo`);
frutas.push("Mango");
console.log(frutas, `En este momento hay: ${frutas.length} frutas en mi arreglo`);

const grupo = [
    {
        nombre: "Diego",
    },
    {
        nombre: "Ana",
    },
    {
        nombre: "Marian",
    },
    {
        nombre: "Angel",
    },
    {
        nombre: "Hannah",
    }
]

let busquedaUsuario = "Hannah";

const target = grupo.find((integrante) => integrante.nombre === busquedaUsuario);
console.log(target);

const mensajes = grupo.map((elemento, i, arr) => {
    console.log(arr[i]);
    return `Bienvenido ${elemento.nombre} el indice donde esta guardada su información es: ${i}`
})
console.log(mensajes);

const invitados = grupo.filter((persona) => persona.nombre != "Diego");
console.log(invitados);

grupo.forEach((persona) => console.log(persona.nombre));

const productos = [
    {
        nombreProducto: "Manzana",
        cantidad: 5,
        precio: 10.5,
    },
    {
        nombreProducto: "Kiwi",
        cantidad: 3,
        precio: 20.5,
    }
]
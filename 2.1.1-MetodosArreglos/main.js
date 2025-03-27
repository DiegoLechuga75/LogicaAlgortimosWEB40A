const letras = ["H", "o", "l", "a"];

const mensaje = letras.reduce((palabra, letra) => palabra + letra);

console.log(letras[0] + letras[1] + letras[2] + letras[3]);

console.log(mensaje);

const tareas = [
    {
        estado: "completado",
    },
    {
        estado: "completado",
    },
    {
        estado: "pendiente",
    },
    {
        estado: "completado",
    },
    {
        estado: "completado",
    },
]

const verificarTareas = tareas.every((tarea) => tarea.estado === "completado");

console.log(verificarTareas);

function myEvery(arr){
    let elementoActual = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(elementoActual != arr[i]){
            return false;
        }
        elementoActual = arr[i];
    }
    return true;
}

const myNumbers = [1,1,1,5,1,1];

console.log(myEvery(myNumbers));

const numeros = [1,2,3,4,6,7,8];

const incluyeCinco = numeros.includes(5);

console.log(incluyeCinco);

const incluyeTarea = tareas.includes({
    estado: "completado",
})

console.log(incluyeTarea);

const producto1 = {
    nombre: "Manzana",
}

const producto2 = {
    nombre: "Manzana",
}

const direccion1 = "1234";

const direccion2 = "4321";

console.log(producto1 === producto2);

const arr1 = [1,2,3];
const arr2 = [1,2,3];

console.log(arr1 === arr2);

const unaTarea = tareas.some((tarea) => tarea.estado === "pendiente");

console.log(unaTarea);

const objetoRaro = {
    arreglo: [
        [
            {
                nombre: "Diego"
            },
            {
                nombre: "Ana"
            },
        ],
        [
            {
                nombre: "Alan"
            },
            {
                nombre: "Lalo"
            },
        ], 
        [
            {
                nombre: "Angel"
            },
            {
                nombre: "Marian"
            },
        ]
    ]
}

console.log(objetoRaro.arreglo[2][1].nombre);

const carritoCompras = {
    prodcutos: [],

    agregarProducto: function(producto){
        this.prodcutos.push(producto.toLowerCase());
    },

    eliminarProducto: function(prodcuto){
        const indiceProducto = this.prodcutos.indexOf(prodcuto.toLowerCase());
        if(indiceProducto === -1){
            console.log(`No se encontro el producto ${prodcuto}`);
            return;
        }
        this.prodcutos.splice(indiceProducto, 1);
    },

    mostrarProductos: function(){
        console.log(this.prodcutos);
    }
}

carritoCompras.agregarProducto("Kiwi");
carritoCompras.agregarProducto("Fresa");
carritoCompras.agregarProducto("Manzana");

carritoCompras.mostrarProductos();

carritoCompras.eliminarProducto("FRESA");

carritoCompras.mostrarProductos();

//actividad 1
let utiles = ["Lapiz", "Goma", "Regla", "Cuaderno", "Lapicera"];

console.log (utiles)
console.log (utiles [0])
console.log (utiles[2])
console.log (utiles[utiles.length-1])
console.log (utiles.length)
utiles.push ("mochila")
console.log(utiles)
utiles.unshift("cartuchera")
console.log (utiles)
console.log (utiles.length)
console.log (utiles.pop())
console.log (utiles)
console.log(utiles.length)
console.log (utiles.shift())
console.log(utiles)
console.log(utiles.length)

//actividad 2

let productos = ["Leche", "Pan", "Arroz", "Fideos", "Aceite"];

console.log(productos)
console.log(productos.length)
productos.push ("Azúcar")
productos.push ("Yerba")
productos.push ("Café")
console.log(productos)
productos.unshift("Sal")
productos.unshift("Galletitas")
console.log(productos)
console.log(productos.length)
console.log(productos.pop())
console.log(productos.pop())
console.log (productos)
console.log(productos.shift())
console.log(productos)
console.log(productos.length)

//actividad 3
let tecnologia = ["Teclado","Mouse","Monitor","Auriculares","Webcam","Parlantes"];

console.log(tecnologia.indexOf("Mouse"));
console.log(tecnologia.indexOf("Monitor"));
console.log(tecnologia.indexOf("Webcam"));
console.log(tecnologia.indexOf("Impresora"));
let teclado = tecnologia.indexOf("Teclado");
if (teclado != -1) {
    console.log("El teclado está registrado");
} else {
    console.log("El teclado no está registrado");
}

let impresora = tecnologia.indexOf("Impresora");

if (impresora != -1) {
    console.log("La impresora está registrada");
} else {
    console.log("La impresora no está registrada");
}

tecnologia.push("Impresora");

impresora = tecnologia.indexOf("Impresora");

console.log(impresora);
console.log(tecnologia)

//actividad 4
let videojuegos = ["Minecraft","Pokémon Cristal","Super Mario","The Legend of Zelda","Sonic"];

console.log(videojuegos)
console.log(videojuegos.length)
videojuegos.push  ("Animal Crossing")
videojuegos.push  ("Pokémon Rojo")
console.log(videojuegos)
videojuegos.unshift("Tetris")
videojuegos.unshift("Pac-Man")
console.log(videojuegos)
console.log(videojuegos.indexOf("Pokémon Cristal"));
console.log(videojuegos.indexOf("Sonic"));
console.log(videojuegos.indexOf("FIFA"));
console.log(videojuegos.pop());
console.log(videojuegos.shift());
console.log(videojuegos)
console.log(videojuegos.length)

//actividad 5
let estudiantes = ["Martina","Lucas","Sofía","Tomás","Valentina"];

console.log(estudiantes)
console.log(estudiantes.length)
estudiantes.push("Agustín")
estudiantes.push("Camila")
console.log(estudiantes)
estudiantes.unshift("Bruno")
console.log(estudiantes)
console.log(estudiantes.length)
console.log(estudiantes.indexOf("Sofía"));
console.log(estudiantes.indexOf("Camila"));
console.log(estudiantes.indexOf("Federico"));
console.log(estudiantes.shift());
console.log(estudiantes.pop());
console.log(estudiantes)
console.log(estudiantes.length)

//actividad 6
let tareas = ["Estudiar","Hacer la tarea","Ordenar la habitación","Comprar alimentos"];

console.log(tareas)
console.log(tareas.length)
tareas.push("Pasear al perro")
tareas.push("Preparar la cena")
console.log(tareas)
tareas.unshift("Entregar un trabajo")
console.log(tareas)
console.log(tareas.indexOf("Estudiar"));
console.log(tareas.indexOf("Preparar la cena"));
console.log(tareas.indexOf("Lavar el auto"));


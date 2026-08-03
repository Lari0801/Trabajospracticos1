//actividad 1

let number1 = 19;
let parrafo1 = document.querySelector('#p1');
let boton1 = document.querySelector('#b1');

boton1.onclick = function () {
    if (number1 >= 18) {
        parrafo1.textContent = "Sos mayor de edad";
    } else {
        parrafo1.textContent = "Sos menor de edad";
    }
}
//actividad 2
let nombreUsuario = "Nahuel";
let parrafo2 = document.querySelector("#p2");
let boton2 = document.querySelector("#b2");

boton2.onclick = function () {
    if (nombreUsuario == "Nahuel") {
        parrafo2.textContent = "Bienvenido Nahuel, ¿cómo estás?";
    } else {
        parrafo2.textContent = "Bienvenido usuario";
    }
}

//actividad 3
let nombreUsuario2 = "Marcos";
let parrafo3 = document.querySelector("#p3")
let boton3 = document.querySelector("#b3")

boton3.onclick = function () {
if (nombreUsuario2 == "Nahuel" || nombreUsuario2 == "Marcos") {
    parrafo3.textContent = "Bienvenido " + nombreUsuario2 + ", ¿cómo estás?";
} else {
    parrafo3.textContent = "Bienvenido " + nombreUsuario2;
}
}

//actividad 4
let numero = 0;
let parrafo4 = document.querySelector("#p4");

if (numero > 0) {
    parrafo4.textContent = "El número es positivo";
} else if (numero < 0) {
    parrafo4.textContent = "El número es negativo";
} else {
    parrafo4.textContent = "El número es cero";
}
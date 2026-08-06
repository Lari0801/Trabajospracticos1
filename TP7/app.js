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
let nombreUsuario2 = "Nahuel";
let parrafo2 = document.querySelector("#p2");
let boton2 = document.querySelector("#b2");

boton2.onclick = function () {
    if (nombreUsuario2 == "Nahuel") {
        parrafo2.textContent = "Bienvenido Nahuel, ¿cómo estás?";
    } else {
        parrafo2.textContent = "Bienvenido usuario";
    }
}

//actividad 3
let nombreUsuario3 = "Marcos";
let parrafo3 = document.querySelector("#p3")
let boton3 = document.querySelector("#b3")

boton3.onclick = function () {
if (nombreUsuario3 == "Nahuel" || nombreUsuario3 == "Marcos") {
    parrafo3.textContent = "Bienvenido " + nombreUsuario3 + ", ¿cómo estás?";
} else {
    parrafo3.textContent = "Bienvenido " + nombreUsuario3;
}
}

//actividad 4
let numero4 = 0;
let parrafo4 = document.querySelector("#p4");
let boton4 = document.querySelector("#b4")

boton4.onclick = function (){
if (numero4 > 0) {
    parrafo4.textContent = "El número es positivo";
} else if (numero4 < 0) {
    parrafo4.textContent = "El número es negativo";
} else {
    parrafo4.textContent = "El número es cero";
}
}
//actividad 5
let numero5 = 28;
let boton5 = document.querySelector("#b5")
let parrafo5 = document.querySelector("#p5")

boton5.onclick = function (){
    if (numero5 >= 6 && numero5 <= 11)  {
        parrafo5.textContent = "Eres un niño";
    } else if (numero5 >= 12 && numero5 <= 18) {
        parrafo5.textContent = "Eres adolescente";
    }else if (numero5 >= 19 && numero5 <= 26)  {
        parrafo5.textContent = " Eres Joven";
    } else if (numero5 >= 27 && numero5 <= 59) {
        parrafo5.textContent = "Eres adulto";
    }else if(numero5 >=60){
    parrafo5.textContent = "Eres viejo";
    }else parrafo5.textContent = " Hay problemas";

}

//actividad 6

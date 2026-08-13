//actividad 1

let parrafo1 = document.querySelector('#p1');
let boton1 = document.querySelector('#b1');
let number1 = document.querySelector ("#in1")

boton1.onclick = function () {
    if (number1.value >= 18) {
        parrafo1.textContent = "Sos mayor de edad";
    } else {
        parrafo1.textContent = "Sos menor de edad";
    }
}
//actividad 2
let nombreUsuario2 = document.querySelector ("#in2");
let parrafo2 = document.querySelector("#p2");
let boton2 = document.querySelector("#b2");

boton2.onclick = function () {
    if (nombreUsuario2.value == "Nahuel") {
        parrafo2.textContent = "Bienvenido Nahuel, ¿cómo estás?";
    } else {
        parrafo2.textContent = "Bienvenido usuario";
    }
}

//actividad 3
let nombreUsuario3 = document.querySelector ("#in3");
let parrafo3 = document.querySelector("#p3")
let boton3 = document.querySelector("#b3")

boton3.onclick = function () {
if (nombreUsuario3.value == "Nahuel" || nombreUsuario3.value == "Marcos") {
    parrafo3.textContent = "Bienvenido " + nombreUsuario3.value + ", ¿cómo estás?";
} else {
    parrafo3.textContent = "Bienvenido " + nombreUsuario3.value;
}
}

//actividad 4
let numero4 = document.querySelector ("#in4")
let parrafo4 = document.querySelector("#p4");
let boton4 = document.querySelector("#b4")

boton4.onclick = function (){
if (numero4.value > 0) {
    parrafo4.textContent = "El número es positivo";
} else if (numero4.value < 0) {
    parrafo4.textContent = "El número es negativo";
} else {
    parrafo4.textContent = "El número es cero";
}
}
//actividad 5
let numero5 = document.querySelector ("#in5")
let boton5 = document.querySelector("#b5")
let parrafo5 = document.querySelector("#p5")

boton5.onclick = function (){
    if (numero5.value >= 6 && numero5.value <= 11)  {
        parrafo5.textContent = "Eres un niño";
    } else if (numero5.value >= 12 && numero5.value <= 18) {
        parrafo5.textContent = "Eres adolescente";
    }else if (numero5.value >= 19 && numero5.value <= 26)  {
        parrafo5.textContent = " Eres Joven";
    } else if (numero5.value >= 27 && numero5.value <= 59) {
        parrafo5.textContent = "Eres adulto";
    }else if(numero5.value >=60){
    parrafo5.textContent = "Eres viejo";
    }else parrafo5.textContent = " Hay problemas";

}

//actividad 6
let diaLaboral = document.querySelector ("#in6")
let parrafo6 = document.querySelector('#p6');
let boton6 = document.querySelector("#b6");

boton6.onclick = function (){

if (diaLaboral.value == "lunes" || diaLaboral.value == "martes" || diaLaboral.value == "miercoles" || diaLaboral.value == "jueves" || diaLaboral.value == "viernes") {
    parrafo6.textContent = "Es un día laborable";
} else if (diaLaboral.value == "sabado" || diaLabora.value == "domingo") {
    parrafo6.textContent = "Es fin de semana";
}
}

//actividad 7
let contraseña = document.querySelector ("#in7")
let parrafo7 = document.querySelector('#p7');
let boton7 = document.querySelector('#b7');

boton7.onclick = function () {
    if (contraseña.value == "secreto") {
        parrafo7.textContent = "Acceso concedido";
    } else {
        parrafo7.textContent = "Acceso denegado";
    }
}
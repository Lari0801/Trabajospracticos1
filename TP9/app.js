//actividad 1
let boton1 = document.querySelector("#boton1");
let n1 = document.querySelector("#input1");
let n2 = document.querySelector("#input2");
let p1 = document.querySelector("#p1")


function comparacion(n1, n2){
let mensaje
 if (n1 > n2) {
   mensaje = n1 + " " + "es mayor"
 } else if(n1<n2){
  mensaje = n2 + " " + "es mayor"
 }
 return mensaje
}

boton1.onclick = function (){
  p1.textContent = comparacion(n1.value, n2.value)
}

//actividad 2
let boton2 = document.querySelector("#boton2");
let num1 = document.querySelector("#input3");
let num2 = document.querySelector("#input4");
let p2 = document.querySelector("#p2")

function comparacion2(num1, num2){
let mensaje
 if (num1 < num2) {
   mensaje = num1 + " " + "es menor"
 } else if(num1 > num2){
  mensaje = num2 + " " + "es menor"
 }
 return mensaje
}

boton2.onclick = function (){
  p2.textContent = comparacion2(num1.value, num2.value)
}

//actividad 3
let boton3 = document.querySelector("#boton3");
let numero1 = document.querySelector("#input5");
let numero2 = document.querySelector("#input6");
let p3 = document.querySelector("#p3");

function comparacion3(numero1, numero2){
let mensaje
 if (numero1 === numero2) {
  mensaje = numero1 +" y "+ numero2 + " " + "son iguales"
 } else if(numero1 !== numero2){
  mensaje = numero1 +" y "+ numero2 + " " + "son diferentes"
 }
 return mensaje
}

boton3.onclick = function (){
  p3.textContent = comparacion3(numero1.value, numero2.value)
}

//actividad 4
let boton4 = document.querySelector("#boton4");
let numero = document.querySelector("#input7");
let p4 = document.querySelector("#p4");

function calcularIVA(precio) {
    let iva;
    iva = precio * 0.21;
    return iva;
}

boton4.onclick = function () {
    p4.textContent = "El IVA es $" + calcularIVA(numero.value);
}


//actividad 5
let boton5 = document.querySelector("#boton5");
let text1 = document.querySelector("#input8");
let p5 = document.querySelector("#p5");

function comparacion5(text1){
    let mensaje;
    mensaje = "Hola" + " " + text1
    return mensaje
}
boton5.onclick = function () {
    p5.textContent = comparacion5(text1.value);
}

//actividad 6
let boton6 = document.querySelector("#boton6");
let text2 = document.querySelector("#input9");
let p6 = document.querySelector("#p6");
let body = document.querySelector("body");

function cambiar(modo){
     if (modo == "modo oscuro") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        p6.textContent = "modo oscuro activado";
    }
}
boton6.onclick = function () {
    cambiar(text2.value);
}

//actividad 7
let boton7 = document.querySelector("#boton7");
let text3 = document.querySelector("#input10");
let p7 = document.querySelector("#p7");

function cambiar2(modo2){
     if (modo2 == "modo claro") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        p7.textContent = "modo claro activado";
    }
}
boton7.onclick = function () {
    cambiar2(text3.value);
}
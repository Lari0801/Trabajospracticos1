//actividad 1
let boton1 = document.querySelector("#boton1");
let n1 = document.querySelector("#input1");
let n2 = document.querySelector("#input2");
let p1 = document.querySelector("#p1")


function comparacion(n1, n2){
let mensaje
 if (n1 > n2) {
   mensaje = n1 +  "es mayor"
 } else if(n1<n2){
  mensaje = n2 +  "es mayor"
 }else if (n1 == n2){
  mensaje = "son iguales"
 }
 return mensaje
}

boton1.onclick = function (){
  p1.textContent = comparacion(n1.value, n2.value)
}


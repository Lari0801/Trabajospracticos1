let number1 = 19;
let parrafo1 = document.querySelector ('#p1')
let boton1 = document.querySelector ('#b1')

boton1.onclick = function (){
if (number1 >= 18)
{
parrafo1 ('Sos mayor de edad')
}else{
parrafo1 ('Sos menor de edad')
}
}
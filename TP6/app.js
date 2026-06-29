let boton1 = document.querySelector ('#b1')
let boton2 = document.querySelector ('#b2')
let boton3 = document.querySelector ('#b3')
let boton4 = document.querySelector ('#b4')
let boton5 = document.querySelector('#b5')
let boton6 = document.querySelector("#b6")
let parrafo = document.querySelector('#p1')

boton1.onclick = function () {
    parrafo.textContent = "Que haces que no fuiste a escuchar Run It? Dale amigo, es un temazo!";
}

boton2.onclick = function () {
 parrafo.style.backgroundColor = 'rgb(88, 147, 214)'
}
boton3.onclick = function () {
    parrafo.style.color = 'rgb(51, 64, 80)'
}
boton4.onclick = function () {
    parrafo.style.fontFamily = 'impact'
}
boton5.onclick = function () {
    parrafo.style.fontSize = '24px'
}
boton6.onclick = function () {
    parrafo.textContent = "Se llama Run It y está en todas las plataformas digitales. Miren el M/V en la cuenta oficial."
    parrafo.style.backgroundColor = ""
    parrafo.style.color = ""
    parrafo.style.fontFamily = ""
    parrafo.style.fontSize = ""
}
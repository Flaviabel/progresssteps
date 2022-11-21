let numeros = document.querySelectorAll('.circle');
let boton1 = document.querySelector('#boton1');
let boton2 = document.querySelector('#boton2');
let hr = document.querySelectorAll('hr');

let contador = 0

function pintar() {
    if (contador <= 3) {
        numeros[contador].classList.add('next');
    }
    if (contador <= 2) {
        hr[contador].classList.add('next');
    }
    contador++
    console.log(contador)
}

function borrar() {
    if (contador >= 1) {
        numeros[contador--].classList.remove('next');
    }
    if (contador >= 0) {
        hr[contador].classList.remove('next');
    }
    console.log(contador)
}

boton1.addEventListener('click', borrar)
boton2.addEventListener('click', pintar)
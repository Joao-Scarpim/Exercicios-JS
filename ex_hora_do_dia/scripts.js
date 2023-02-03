
// Baseado na hora do dia, o background e a foto são alteradas

const now = new Date()
const hora = now.getHours()

const body = document.querySelector('body')
const img = document.querySelector('.img')
const info = document.querySelector('.main-div h3')


if(hora < 12) {
    body.style.background = "rgb(217, 224, 151)"
    img.src = "./img/dia.jpg"
} else if(hora < 18) {
    body.style.background = "rrgb(202, 127, 40)"
    img.src = "./img/tarde.jpg"
} else {
    body.style.background = "rgb(63, 62, 61)"
    img.src = "./img/noite.jpg"
}
info.textContent = `Agora são ${hora} horas`


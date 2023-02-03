
// Recebe o ano de nascimento de uma pessoa e o gênero, e retorna a idade e uma foto
// De uma pessoa do mesmo gênero e idade


const ano = document.getElementById('ano')
const M = document.getElementById("M")
const F = document.getElementById("F")
const button = document.querySelector("button")
const result = document.querySelector(".img-field h2")

function clicar() {
    if(ano.value == ""|| F.checked == false && M.checked == false) {
        alert("Erro Preencha todos os campos")
    } else {
        const currentDate = new Date()
        const idade = currentDate.getFullYear() - Number(ano.value)
        
        // Gênero
        let genero
        if(M.checked) {
            genero = "homem"
        } else {
            genero = "mulher"
        }

        // index da imagem
        let index 
        if(idade <= 5) {
            index = 5
        } else if(idade <= 10){
            index = 10
        } else if(idade > 10 && idade <= 25) {
            index = 18
        } else if(idade > 25 && idade <= 45){
            index = 30
        } else {
            index = 60
        }
        const result = document.getElementById('result')
        result.classList.add("img-field")
        result.innerHTML = `<h2>Detectamos ${genero} com ${idade} anos</h2>
                            <img src="./${genero}/${genero}${index}.jpg" alt="" id="img">`
    }
}

button.addEventListener("click", clicar)






// Recebe início, fim e passo da contagem, e mostra a contagem na tela


const button = document.querySelector(".main-div button")

function count() {
        const start = document.getElementById("start").value
        const end = document.getElementById("end").value
        let passo = document.getElementById("passo").value
        const result = document.getElementById("result")
    if(start.length == 0 || end.length == 0 || passo.length == 0) {
        alert("[ERRO] Preencha todos os campos")
    } else {
        if(Number(passo) == 0 ){
            alert("Passo inválido, considerando PASSO 1")
            passo = 1}

        if(result.textContent == ""){
            if(Number(end) > Number(start)) {
                for(let x = Number(start); x <= Number(end); x += Number(passo)){
                    result.textContent += ` 👉 ${x}`
                }
            } else {
                for(let x = Number(start); x >= Number(end); x -= Number(passo)){
                    result.textContent += ` 👉 ${x}`
                }
            }
            }    
        }
}
button.addEventListener("click", count)


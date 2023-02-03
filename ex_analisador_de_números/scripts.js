

// Recebe números entre 1 a 100 e retorna vários dados relacionados a esses números


const add = document.getElementById("add")
const finish = document.getElementById("finish")
let array = []

function append() {
    const num = document.getElementById("num")
    const n = Number(num.value)
    const select = document.getElementById("select")
    
    
    if(n > 100 || n < 1 || num.length == 0 || array.indexOf(n) != -1) {
        alert("Valor inválido ou já encontrado na lista")
    } else {
        array.push(n)
        select.innerHTML += `<option>Valor ${n} adicionado.</option>`
        
    }
    num.value = ""
    num.focus()

}


function info() {
    const result = document.getElementById("result")
    if(result.textContent == "") {
        if(array.length == 0) {
            alert("Digite pelo menos um número!")
        } else {
            result.innerHTML += `<p id="p">Ao todo, temos ${array.length} números cadastrados.</p>`
    
            let men = array[0]
            let mai = 0
            for(let i = 0; i <= array.length; i++) {
                if(array[i] > mai){
                    mai = array[i]
                }
                if(array[i] < men){
                    men = array[i]
                }
            }
            result.innerHTML += `<p id="p">O maior valor informado foi ${mai}.</p>`
            result.innerHTML += `<p id="p">O menor valor informado foi ${men}.</p>`
    
            let count = 0
            for(val of array) {
                count += val  
            }
            result.innerHTML += `<p id="p">Somando todos os valores, temos ${count}.</p>`
            result.innerHTML += `<p id="p">A média dos valores digitados é ${(count / array.length).toFixed(2)}</p>`
        }
    }

}

add.addEventListener("click", append)
finish.addEventListener("click", info)
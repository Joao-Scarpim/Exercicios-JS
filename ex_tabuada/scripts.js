
// Recebe um número e retorna a tabuada desse número

const button = document.querySelector(".input button")
const select = document.querySelector("#select")


button.addEventListener("click", () => {
    const num = document.getElementById("num").value
    let i = 1
    for(let x = Number(num); i <= 10; i++) {
        select.innerHTML += `<option>${x} X ${i} = ${x * i}</option>`
    }
})
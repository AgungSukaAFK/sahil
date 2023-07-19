const buttons = document.querySelectorAll(".btn");
let colors = ["red", "green", "blue", "salmon", "cyan", "gray", "pink", "black", "yellow", "lime", "brown"]
buttons.forEach(item => {
    item.addEventListener("click", () => {
        item.style.backgroundColor = pickColors()
    })   
})

function pickColors(){
    return colors[Math.round(Math.random()*10)]
}
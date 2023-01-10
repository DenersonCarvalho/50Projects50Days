const contagem = document.getElementById('contagem')
const efeito = document.getElementById('efeito')
const opacidade = document.getElementById('opacidade')
var i = 100
var x = 1
var y = 100
window.addEventListener('load', () => {
        loop()
        opacity()
        blur()
})

function loop() {
    setTimeout(function(){
        contagem.innerText = i
        i--
        if (i >= 0) {
            loop()
        }
    }, 10);
}
function opacity() {
    setTimeout(function(){
        opacidade.style.opacity = x.toFixed(2)
        x = x - 0.01
        if (x >= 0) {
            opacity()
        }
    }, 10);
}
function blur() {
    setTimeout(function(){
        efeito.style.backdropFilter = `blur(${y}px)`
        console.log(y);
        y--
        if (y >= 0) {
            blur()
        }
    }, 10);
}

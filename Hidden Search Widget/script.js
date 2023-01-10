const button = document.querySelector('.btn')
const container = document.querySelector('.container')
const input = document.querySelector('.input')

button.addEventListener('click', () => {
    container.classList.toggle('active')
    input.focus()
})
input.addEventListener('blur',  () =>{
    container.classList.toggle('active')
})
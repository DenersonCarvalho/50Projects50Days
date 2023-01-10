const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))

const slides = document.querySelectorAll('.slide')

slides.forEach(slide => {
    slide.addEventListener('mouseover', () => {
        removeActiveClasses()
        slide.classList.add('active')
    })
})

function removeActiveClasses(){
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}
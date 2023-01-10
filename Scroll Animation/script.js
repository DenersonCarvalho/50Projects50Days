const containers = document.querySelectorAll('.container')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    containers.forEach(container => {
        const boxTop = container.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            container.classList.add('show')
        } else {
            container.classList.remove('show')
        }
    });
}

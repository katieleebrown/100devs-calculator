document.querySelectorAll('.button').forEach(section => {
    section.addEventListener('click', showThis)
})

let display = document.querySelector('#displayEquationHere')

function showThis(e) {
    const number = e.currentTarget.innerText

    switch (number) {
        case '=':
            display.innerText = eval(display.innerText)
            break
        case 'C':
            display.innerText = ""
            break
        default:
            display.innerText += e.currentTarget.innerText
    }
}
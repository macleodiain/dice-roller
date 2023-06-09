function d10(){
    return (Math.floor((Math.random()*10)+1)).toString()
}

function d20(){
    return (Math.floor((Math.random()*20)+1))
}
function d100(){
    return Math.floor((Math.random()*100)+1)
}

const outputBox = document.querySelector('#output-box')
const d10Button = document.querySelector('#d10')
const d20Button = document.querySelector('#d20')
const d100Button = document.querySelector('#d100')

d10Button.addEventListener('click', () => {
    
    
    outputBox.textContent = d10()
    outputBox.style.fontSize = "150px"
})

d20Button.addEventListener('click', () => {
    outputBox.textContent = d20()
    outputBox.style.fontSize = "150px"
})
d100Button.addEventListener('click', () => {
    outputBox.textContent = d100()
    outputBox.style.fontSize = "150px"
})
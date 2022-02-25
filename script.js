let box = document.querySelector ('.out')
let createButton = document.querySelector ('.set')
let removeButton = document.querySelector ('.clear')
removeButton.style.display = 'none'


function createBlock () {
    let inputWidth = document.querySelector('.width').value
    let inputHeight = document.querySelector('.height').value
    let inputColor = document.querySelector('.color').value

    if (inputWidth<=100 || inputHeight<=100) {
        alert ('введи побольше')
    } else {
        if (inputWidth>=800 || inputHeight>=700) {
            alert ('введи поменьше')
        }
        else {
            let block = document.createElement ('div')
            block.classList = ('moving')

            block.style.width = inputWidth + 'px'

            block.style.height = inputHeight + 'px'

            block.style.backgroundColor = inputColor

            box.append (block)


            createButton.style.display = 'none'
            removeButton.style.display = 'flex'
        }
    }
    document.querySelector ('.width').value = ' '
    document.querySelector ('.height').value = ' '
}


function deleteBlock () {
    let block = document.querySelector ('.moving') 
    block.remove ()
    createButton.style.display = 'flex'
    removeButton.style.display = 'none'
}



let divTop = 0
let divLeft = 0

function moveBlockDown () {
    let block = document.querySelector ('.moving')
    if (!document.querySelector ('.moving')) {
        alert ('создай блок')
    } else {
        let inputHeight = parseInt(block.style.height)
        divTop+=10
        block.style.top = divTop + 'px'
        if (divTop > (700-inputHeight)) {
            alert ('не выходи за поле')
            divTop-=10
            block.style.top = divTop + 'px'
        }
    }
}
function moveBlockUp () {
    let block = document.querySelector ('.moving')
    if (!document.querySelector ('.moving')) {
        alert ('создай блок')
    } else {
        divTop-=10
        block.style.top = divTop + 'px'
        if (divTop < 0) {
            alert ('не выходи за поле')
            divTop+=10
            block.style.top = divTop + 'px'
        }
    }
}
function moveBlockRight () {
    let block = document.querySelector ('.moving')
    if (!document.querySelector ('.moving')) {
        alert ('создай блок')
    } else {
        let inputWidth = parseInt(block.style.width)
        divLeft+=10
        block.style.left = divLeft + 'px'
        if (divLeft > (800-inputWidth)) {
            alert ('не выходи за поле')
            divLeft-=10
            block.style.left = divLeft + 'px'
        }
    }
}
function moveBlockLeft () {
    let block = document.querySelector ('.moving')
    if (!document.querySelector ('.moving')) {
        alert ('создай блок')
    } else {
        divLeft-=10
        block.style.left = divLeft + 'px'
        if (divLeft < 0) {
            alert ('не выходи за поле')
            divLeft+=10
            block.style.left = divLeft + 'px'
        }
    }
}
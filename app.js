const noteC = document.getElementById('noteC')
const noteD = document.getElementById('noteD')
const noteE = document.getElementById('noteE')
const noteF = document.getElementById('noteF')
const noteG = document.getElementById('noteG')
const noteA = document.getElementById('noteA')
const noteB = document.getElementById('noteB')
const noteCHigh = document.getElementById('noteCHigh')

noteC.addEventListener('click', (e) => {
    new Audio('./sounds/cLow.mp3').play()
})

noteD.addEventListener('click', (e) => {
    new Audio('./sounds/d.mp3').play()
})

noteE.addEventListener('click', (e) => {
    new Audio('./sounds/e.mp3').play()
})

noteF.addEventListener('click', (e) => {
    new Audio('./sounds/f.mp3').play()
})

noteG.addEventListener('click', (e) => {
    new Audio('./sounds/g.mp3').play()
})

noteA.addEventListener('click', (e) => {
    new Audio('./sounds/a.mp3').play()
})

noteB.addEventListener('click', (e) => {
    new Audio('./sounds/b.mp3').play()
})

noteCHigh.addEventListener('click', (e) => {
    new Audio('./sounds/cHigh.mp3').play()
})




const playList = ['a', 'b', 'g']


const playSequence = document.getElementById('playSequence')
playSequence.addEventListener('click', (e) => {

    let timeVar = 0
    for (let i = 0; i < playList.length; i ++){
        setTimeout(() =>{new Audio(`./sounds/${playList[i]}.mp3`).play()}, timeVar)
        timeVar +=  1000
    }
})


const noteA = document.getElementById('noteA')
const noteB = document.getElementById('noteB')
const noteG = document.getElementById('noteG')




noteA.addEventListener('click', (e) => {
    new Audio('./sounds/a.mp3').play()
})

noteB.addEventListener('click', (e) => {
    new Audio('./sounds/b.mp3').play()
})

noteG.addEventListener('click', (e) => {
    new Audio('./sounds/g.mp3').play()
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

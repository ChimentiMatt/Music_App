const c = document.getElementById('c1')
const d = document.getElementById('d1')
const e_ = document.getElementById('e1')
const f = document.getElementById('f1')
const g = document.getElementById('g1')
const a = document.getElementById('a1')
const b = document.getElementById('b1')

const c2 = document.getElementById('c2')
const b2 = document.getElementById('b2')
const playList = [null]


const playSequence = document.getElementById('playSequence')
playSequence.addEventListener('click', (e) => {

    let timeVar = 0
    for (let i = 0; i < playList.length; i ++){
        setTimeout(() =>{new Audio(`./sounds/${playList[i]}.mp3`).play()}, timeVar)
        timeVar +=  1000
    }
})


c.addEventListener('click', (e) => {
    playList[0] = 'c'
    c.style.opacity = 1
    clearNotes(1, 'c1')
})

d.addEventListener('click', (e) => {
    playList[0] = 'd'
    d.style.opacity = 1
})

e_.addEventListener('click', (e) => {
    playList[0] = 'e'
    e_.style.opacity = 1
})

f.addEventListener('click', (e) => {
    playList[0] = 'f'
    console.log(playList)
    f.style.opacity = 1
})

g.addEventListener('click', (e) => {
    playList[0] = 'c'
    g.style.opacity = 1
})

a.addEventListener('click', (e) => {
    playList[0] = 'a'
    a.style.opacity = 1
})

b.addEventListener('click', (e) => {
    playList[0] = 'b'
    b.style.opacity = 1
})


c2.addEventListener('click', (e) => {
    playList[1] = 'c'
    c2.style.opacity = 1
})

b2.addEventListener('click', (e) => {
    playList[1] = 'b'
    b2.style.opacity = 1
})



const notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
function clearNotes(column, cn) {
    console.log(column)
    for (let i = 0; i < notes.length; i++){
        let idStr = notes[i] + column.toString()
        let x = document.getElementById(idStr)
        x.style.opacity = .2
        console.log(notes[1], column)
    }
    document.getElementById(cn).style.opacity = 1
}
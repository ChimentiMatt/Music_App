const c = document.getElementById('c1')
const d = document.getElementById('d1')
const e_ = document.getElementById('e1')
const f = document.getElementById('f1')
const g = document.getElementById('g1')
const a = document.getElementById('a1')
const b = document.getElementById('b1')

const c2 = document.getElementById('c2')
const d2 = document.getElementById('d2')
const e2 = document.getElementById('e2')
const f2 = document.getElementById('f2')
const g2 = document.getElementById('g2')
const a2 = document.getElementById('a2')
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
    clearNotes(1, 'd1')
})

e_.addEventListener('click', (e) => {
    playList[0] = 'e'
    e_.style.opacity = 1
    clearNotes(1, 'e1')
})

f.addEventListener('click', (e) => {
    playList[0] = 'f'
    f.style.opacity = 1
    clearNotes(1, 'f1')
})

g.addEventListener('click', (e) => {
    playList[0] = 'g'
    g.style.opacity = 1
    clearNotes(1, 'g1')
})

a.addEventListener('click', (e) => {
    playList[0] = 'a'
    a.style.opacity = 1
    clearNotes(1, 'a1')
})

b.addEventListener('click', (e) => {
    playList[0] = 'b'
    b.style.opacity = 1
    clearNotes(1, 'b1')
})





c2.addEventListener('click', (e) => {
    playList[1] = 'c'
    c2.style.opacity = 1
    clearNotes(2, 'c2')
})

d2.addEventListener('click', (e) => {
    playList[1] = 'd'
    d2.style.opacity = 1
    clearNotes(2, 'd2')
})

e2.addEventListener('click', (e) => {
    playList[1] = 'e'
    e2.style.opacity = 1
    clearNotes(2, 'e2')
})

f2.addEventListener('click', (e) => {
    playList[1] = 'f'
    f2.style.opacity = 1
    clearNotes(2, 'f2')
})

g2.addEventListener('click', (e) => {
    playList[1] = 'g'
    g2.style.opacity = 1
    clearNotes(2, 'g2')
})

a2.addEventListener('click', (e) => {
    playList[1] = 'a'
    a2.style.opacity = 1
    clearNotes(2, 'a2')
})


b2.addEventListener('click', (e) => {
    playList[1] = 'b'
    b2.style.opacity = 1
    clearNotes(2, 'b2')
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
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

const c3 = document.getElementById('c3')
const d3 = document.getElementById('d3')
const e3 = document.getElementById('e3')
const f3 = document.getElementById('f3')
const g3 = document.getElementById('g3')
const a3 = document.getElementById('a3')
const b3 = document.getElementById('b3')

const c4 = document.getElementById('c4')
const d4 = document.getElementById('d4')
const e4 = document.getElementById('e4')
const f4 = document.getElementById('f4')
const g4 = document.getElementById('g4')
const a4 = document.getElementById('a4')
const b4 = document.getElementById('b4')

const c5 = document.getElementById('c5')
const d5 = document.getElementById('d5')
const e5 = document.getElementById('e5')
const f5 = document.getElementById('f5')
const g5 = document.getElementById('g5')
const a5 = document.getElementById('a5')
const b5 = document.getElementById('b5')

// Column 1
let cClick = 0
c.addEventListener('click', (e) => {
    cClick += 1
    playList[1] = 'c'
    clearNotes(1, 'c1')
    changeNoteType(1, cClick, c)
    if (cClick == 4){
        cClick = 0
    }
})

d.addEventListener('click', (e) => {
    playList[1] = 'd'
    d.style.opacity = 1
    clearNotes(1, 'd1')
})

e_.addEventListener('click', (e) => {
    playList[1] = 'e'
    e_.style.opacity = 1
    clearNotes(1, 'e1')
})

f.addEventListener('click', (e) => {
    playList[1] = 'f'
    f.style.opacity = 1
    clearNotes(1, 'f1')
})

g.addEventListener('click', (e) => {
    playList[1] = 'g'
    g.style.opacity = 1
    clearNotes(1, 'g1')
})

a.addEventListener('click', (e) => {
    playList[1] = 'a'
    a.style.opacity = 1
    clearNotes(1, 'a1')
})

b.addEventListener('click', (e) => {
    playList[1] = 'b'
    b.style.opacity = 1
    clearNotes(1, 'b1')
})

// Column 2
let c2click = 0
c2.addEventListener('click', (e) => {
    c2click += 1
    playList[2] = 'c'
    c2.style.opacity = 1
    clearNotes(2, 'c2')
    changeNoteType(2, c2click, c2)
    if (c2Click == 4){
        c2Click = 0
    }
})

let d2click = 0
d2.addEventListener('click', (e) => {
    d2click += 1
    playList[2] = 'd'
    d2.style.opacity = 1
    clearNotes(2, 'd2')
    changeNoteType(2, d2click, d2)
})

let e2click = 0
e2.addEventListener('click', (e) => {
    e2click += 1
    playList[2] = 'e'
    e2.style.opacity = 1
    clearNotes(2, 'e2')
    changeNoteType(2, e2click, e2)
})

let f2click = 0
f2.addEventListener('click', (e) => {
    f2click += 1
    playList[2] = 'f'
    f2.style.opacity = 1
    clearNotes(2, 'f2')
    changeNoteType(2, f2click, f2)
})

let g2click = 0
g2.addEventListener('click', (e) => {
    g2click += 1
    playList[2] = 'g'
    g2.style.opacity = 1
    clearNotes(2, 'g2')
    changeNoteType(2, g2click, g2)
})

let a2click = 0
a2.addEventListener('click', (e) => {
    a2click += 1
    playList[2] = 'a'
    a2.style.opacity = 1
    clearNotes(2, 'a2')
    changeNoteType(2, a2click, a2)
})

let b2click = 0
b2.addEventListener('click', (e) => {
    b2click += 1
    playList[2] = 'b'
    b2.style.opacity = 1
    clearNotes(2, 'b2')
    changeNoteType(2, b2click, b2)
})


// Column 3
let c3click = 0
c3.addEventListener('click', (e) => {
    c3click += 1
    playList[3] = 'c'
    c3.style.opacity = 1
    clearNotes(3, 'c3')
    changeNoteType(3, c3click, c3)
})

let d3click = 0
d3.addEventListener('click', (e) => {
    d3click += 1
    playList[3] = 'd'
    d3.style.opacity = 1
    clearNotes(3, 'd3')
    changeNoteType(3, d3click, d3)
})

let e3click = 0
e3.addEventListener('click', (e) => {
    e3click += 1
    playList[3] = 'e'
    e3.style.opacity = 1
    clearNotes(3, 'e3')
    changeNoteType(3, e3click, e3)
})

let f3click = 0
f3.addEventListener('click', (e) => {
    f3click += 1
    playList[3] = 'f'
    f3.style.opacity = 1
    clearNotes(3, 'f3')
    changeNoteType(3, f3click, f3)
})

let g3click = 0
g3.addEventListener('click', (e) => {
    g3click += 1
    playList[3] = 'g'
    g3.style.opacity = 1
    clearNotes(3, 'g3')
    changeNoteType(3, g3click, g3)
})

let a3click = 0
a3.addEventListener('click', (e) => {
    a3click += 1
    playList[3] = 'a'
    a3.style.opacity = 1
    clearNotes(3, 'a3')
    changeNoteType(3, a3click, a3)
})

let b3click = 0
b3.addEventListener('click', (e) => {
    b3click += 1
    playList[3] = 'b'
    b3.style.opacity = 1
    clearNotes(3, 'b3')
    changeNoteType(3, b3click, b3)
})


// Column 4
c4.addEventListener('click', (e) => {
    playList[4] = 'c'
    c4.style.opacity = 1
    clearNotes(4, 'c4')
})

d4.addEventListener('click', (e) => {
    playList[4] = 'd'
    d4.style.opacity = 1
    clearNotes(4, 'd4')
})

e4.addEventListener('click', (e) => {
    playList[4] = 'e'
    e4.style.opacity = 1
    clearNotes(4, 'e4')
})

f4.addEventListener('click', (e) => {
    playList[4] = 'f'
    f4.style.opacity = 1
    clearNotes(4, 'f4')
})

g4.addEventListener('click', (e) => {
    playList[4] = 'g'
    g4.style.opacity = 1
    clearNotes(4, 'g4')
})

a4.addEventListener('click', (e) => {
    playList[4] = 'a'
    a4.style.opacity = 1
    clearNotes(4, 'a4')
})


b4.addEventListener('click', (e) => {
    playList[4] = 'b'
    b4.style.opacity = 1
    clearNotes(4, 'b4')
})


// Column 5
c5.addEventListener('click', (e) => {
    playList[4] = 'c'
    c5.style.opacity = 1
    clearNotes(5, 'c5')
})

d5.addEventListener('click', (e) => {
    playList[4] = 'd'
    d5.style.opacity = 1
    clearNotes(5, 'd5')
})

e5.addEventListener('click', (e) => {
    playList[4] = 'e'
    e5.style.opacity = 1
    clearNotes(5, 'e5')
})

f5.addEventListener('click', (e) => {
    playList[4] = 'f'
    f5.style.opacity = 1
    clearNotes(5, 'f5')
})

g5.addEventListener('click', (e) => {
    playList[4] = 'g'
    g5.style.opacity = 1
    clearNotes(5, 'g5')
})

a5.addEventListener('click', (e) => {
    playList[4] = 'a'
    a5.style.opacity = 1
    clearNotes(5, 'a5')
})

b5.addEventListener('click', (e) => {
    playList[4] = 'b'
    b5.style.opacity = 1
    clearNotes(5, 'b5')
})

function changeNoteType(column, counter, note) {
    if (counter == 1){
        note.style.color = 'black'
        note.innerHTML = 'o'
    }
    else if (counter == 2){
        duration[column] = 500
        note.style.color = 'red'
        note.innerHTML = 'o'
    }
    else if (counter == 3){
        duration[column] = 1000
        playList[column] = 'mute'
        note.style.color = 'black'
        note.innerHTML = 'R'
        console.log(playList)
    }
    else if (counter == 4){
        duration[column] = 500
        playList[column] = 'mute'
        note.style.color = 'black'
        note.innerHTML = 'r'
    }
}


const notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

function clearNotes(column, cn) {
    // console.log(column)
    for (let i = 0; i < notes.length; i++){
        let idStr = notes[i] + column.toString()
        let columnBtns = document.getElementById(idStr)
        columnBtns.style.opacity = .2
        // console.log(notes[1], column)
    }
    document.getElementById(cn).style.opacity = .9
}

const playList = ['mute']
const duration = [0, 1000, 1000, 1000, 1000]

const playSequence = document.getElementById('playSequence')
playSequence.addEventListener('click', (e) => {

    let timeVar = 0
    for (let i = 0; i < playList.length; i ++){
        timeVar += duration[i]
        setTimeout(() =>{new Audio(`./sounds/${playList[i]}.mp3`).play()}, timeVar)
    }
})

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

let dClick = 0
d.addEventListener('click', (e) => {
    dClick += 1
    playList[1] = 'd'
    clearNotes(1, 'd1')
    changeNoteType(1, dClick, d)
    if (dClick == 4){
        dClick = 0
    }
})

let eClick = 0
e_.addEventListener('click', (e) => {
    eClick += 1
    playList[1] = 'e'
    clearNotes(1, 'e1')
    changeNoteType(1, eClick, e_)
    if (eClick == 4){
        eClick = 0
    }
})

let fClick = 0
f.addEventListener('click', (e) => {
    fClick += 1
    playList[1] = 'f'
    clearNotes(1, 'f1')
    changeNoteType(1, fClick, f)
    if (fClick == 4){
        fClick = 0
    }
})

let gClick = 0
g.addEventListener('click', (e) => {
    gClick += 1
    playList[1] = 'g'
    clearNotes(1, 'g1')
    changeNoteType(1, gClick, g)
    if (gClick == 4){
        gClick = 0
    }
})

let aClick = 0
a.addEventListener('click', (e) => {
    aClick += 1
    playList[1] = 'a'
    clearNotes(1, 'a1')
    changeNoteType(1, aClick, a)
    if (aClick == 4){
        aClick = 0
    }
})

let bClick = 0
b.addEventListener('click', (e) => {
    bClick += 1
    playList[1] = 'b'
    clearNotes(1, 'b1')
    changeNoteType(1, bClick, b)
    if (bClick == 4){
        bClick = 0
    }
})

// Column 2
let c2click = 0
c2.addEventListener('click', (e) => {
    c2click += 1
    playList[2] = 'c'
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
    clearNotes(2, 'd2')
    changeNoteType(2, d2click, d2)
    if (d2Click == 4){
        d2Click = 0
    }
})

let e2click = 0
e2.addEventListener('click', (e) => {
    e2click += 1
    playList[2] = 'e'
    clearNotes(2, 'e2')
    changeNoteType(2, e2click, e2)
    if (e2Click == 4){
        e2Click = 0
    }
})

let f2click = 0
f2.addEventListener('click', (e) => {
    f2click += 1
    playList[2] = 'f'
    clearNotes(2, 'f2')
    changeNoteType(2, f2click, f2)
    if (f2Click == 4){
        f2Click = 0
    }
})

let g2click = 0
g2.addEventListener('click', (e) => {
    g2click += 1
    playList[2] = 'g'
    clearNotes(2, 'g2')
    changeNoteType(2, g2click, g2)
    if (g2Click == 4){
        g2Click = 0
    }
})

let a2click = 0
a2.addEventListener('click', (e) => {
    a2click += 1
    playList[2] = 'a'
    clearNotes(2, 'a2')
    changeNoteType(2, a2click, a2)
    if (a2Click == 4){
        a2Click = 0
    }
})

let b2click = 0
b2.addEventListener('click', (e) => {
    b2click += 1
    playList[2] = 'b'
    clearNotes(2, 'b2')
    changeNoteType(2, b2click, b2)
    if (b2Click == 4){
        b2Click = 0
    }
})


// Column 3
let c3click = 0
c3.addEventListener('click', (e) => {
    c3click += 1
    playList[3] = 'c'
    clearNotes(3, 'c3')
    changeNoteType(3, c3click, c3)
    if (c3Click == 4){
        c3Click = 0
    }
})

let d3click = 0
d3.addEventListener('click', (e) => {
    d3click += 1
    playList[3] = 'd'
    clearNotes(3, 'd3')
    changeNoteType(3, d3click, d3)
    if (d3Click == 4){
        d3Click = 0
    }
})

let e3click = 0
e3.addEventListener('click', (e) => {
    e3click += 1
    playList[3] = 'e'
    clearNotes(3, 'e3')
    changeNoteType(3, e3click, e3)
    if (e3Click == 4){
        e3Click = 0
    }
})

let f3click = 0
f3.addEventListener('click', (e) => {
    f3click += 1
    playList[3] = 'f'
    clearNotes(3, 'f3')
    changeNoteType(3, f3click, f3)
    if (f3Click == 4){
        f3Click = 0
    }
})

let g3click = 0
g3.addEventListener('click', (e) => {
    g3click += 1
    playList[3] = 'g'
    clearNotes(3, 'g3')
    changeNoteType(3, g3click, g3)
    if (g3Click == 4){
        g3Click = 0
    }
})

let a3click = 0
a3.addEventListener('click', (e) => {
    a3click += 1
    playList[3] = 'a'
    clearNotes(3, 'a3')
    changeNoteType(3, a3click, a3)
    if (a3Click == 4){
        a3Click = 0
    }
})

let b3click = 0
b3.addEventListener('click', (e) => {
    b3click += 1
    playList[3] = 'b'
    clearNotes(3, 'b3')
    changeNoteType(3, b3click, b3)
    if (b3Click == 4){
        b3Click = 0
    }
})


// Column 4
let c4click = 0
c4.addEventListener('click', (e) => {
    c4click += 1
    playList[4] = 'c'
    clearNotes(4, 'c4')
    changeNoteType(4, c4click, c4)
    if (c4Click == 4){
        c4Click = 0
    }
})

let d4click = 0
d4.addEventListener('click', (e) => {
    d4click += 1
    playList[4] = 'd'
    clearNotes(4, 'd4')
    changeNoteType(4, d4click, d4)
    if (d4Click == 4){
        d4Click = 0
    }
})

let e4click = 0
e4.addEventListener('click', (e) => {
    e4click += 1
    playList[4] = 'e'
    clearNotes(4, 'e4')
    changeNoteType(4, e4click, e4)
    if (e4Click == 4){
        e4Click = 0
    }
})

let f4click = 0
f4.addEventListener('click', (e) => {
    f4click += 1
    playList[4] = 'f'
    clearNotes(4, 'f4')
    changeNoteType(4, f4click, f4)
    if (f4Click == 4){
        f4Click = 0
    }
})

let g4click = 0
g4.addEventListener('click', (e) => {
    g4click += 1
    playList[4] = 'g'
    clearNotes(4, 'g4')
    changeNoteType(4, g4click, g4)
    if (g4Click == 4){
        g4Click = 0
    }
})

let a4click = 0
a4.addEventListener('click', (e) => {
    a4click += 1
    playList[4] = 'a'
    clearNotes(4, 'a4')
    changeNoteType(4, a4click, a4)
    if (a4Click == 4){
        a4Click = 0
    }
})

let b4click = 0
b4.addEventListener('click', (e) => {
    b4click += 1
    playList[4] = 'b'
    clearNotes(4, 'b4')
    changeNoteType(4, b4click, b4)
    if (b4Click == 4){
        b4Click = 0
    }
})


// Column 5
let c5click = 0
c5.addEventListener('click', (e) => {
    c5click += 1
    playList[5] = 'c'
    clearNotes(5, 'c5')
    changeNoteType(5, c5click, c5)
    if (c5Click == 4){
        c5Click = 0
    }
})

let d5click = 0
d5.addEventListener('click', (e) => {
    d5click += 1
    playList[5] = 'd'
    clearNotes(5, 'd5')
    changeNoteType(5, d5click, d5)
    if (d5Click == 4){
        d5Click = 0
    }
})

let e5click = 0
e5.addEventListener('click', (e) => {
    e5click += 1
    playList[5] = 'e'
    clearNotes(5, 'e5')
    changeNoteType(5, e5click, e5)
    if (e5Click == 4){
        e5Click = 0
    }
})

let f5click = 0
f5.addEventListener('click', (e) => {
    f5click = 1
    playList[5] = 'f'
    clearNotes(5, 'f5')
    changeNoteType(5, f5click, f5)
    if (f5Click == 4){
        f5Click = 0
    }
})

let g5click = 0
g5.addEventListener('click', (e) => {
    g5click += 1
    playList[5] = 'g'
    clearNotes(5, 'g5')
    changeNoteType(5, g5click, g5)
    if (g5Click == 4){
        g5Click = 0
    }
})

let a5click = 0
a5.addEventListener('click', (e) => {
    a5click += 1
    playList[5] = 'a'
    clearNotes(5, 'a5')
    changeNoteType(5, a5click, a5)
    if (a5Click == 4){
        a5Click = 0
    }
})

let b5click = 0
b5.addEventListener('click', (e) => {
    b5click += 1
    playList[5] = 'b'
    clearNotes(5, 'b5')
    changeNoteType(5, b5click, b5)
    if (b5Click == 4){
        b5Click = 0
    }
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
const duration = [0, 1000, 1000, 1000, 1000, 1000]

const playSequence = document.getElementById('playSequence')
playSequence.addEventListener('click', (e) => {

    let timeVar = 0
    for (let i = 0; i < playList.length; i ++){
        timeVar += duration[i]
        setTimeout(() =>{new Audio(`./sounds/${playList[i]}.mp3`).play()}, timeVar)
    }
})

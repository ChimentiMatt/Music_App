const c = document.getElementById('c1')
const d = document.getElementById('d1')
const e_ = document.getElementById('e1')
const f = document.getElementById('f1')
const g = document.getElementById('g1')
const a = document.getElementById('a1')
const b = document.getElementById('b1')
const cH = document.getElementById('c1H')
const dH = document.getElementById('d1H')
const e_H = document.getElementById('e1H')
const fH = document.getElementById('f1H')
const gH = document.getElementById('g1H')
const aH = document.getElementById('a1H')
const bH = document.getElementById('b1H')

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
    if (cClick == 8){
        cClick = 0
    }
})

let dClick = 0
d.addEventListener('click', (e) => {
    dClick += 1
    playList[1] = 'd'
    clearNotes(1, 'd1')
    changeNoteType(1, dClick, d)
    if (dClick == 8){
        dClick = 0
    }
})

let eClick = 0
e_.addEventListener('click', (e) => {
    eClick += 1
    if (eClick == 4){ eClick = 7}
    playList[1] = 'e'
    clearNotes(1, 'e1')
    changeNoteType(1, eClick, e_)
    if (eClick == 8){
        eClick = 0
    }
})

let fClick = 0
f.addEventListener('click', (e) => {
    fClick += 1
    playList[1] = 'f'
    clearNotes(1, 'f1')
    changeNoteType(1, fClick, f)
    if (fClick == 8){
        fClick = 0
    }
})

let gClick = 0
g.addEventListener('click', (e) => {
    gClick += 1
    playList[1] = 'g'
    clearNotes(1, 'g1')
    changeNoteType(1, gClick, g)
    if (gClick == 8){
        gClick = 0
    }
})

let aClick = 0
a.addEventListener('click', (e) => {
    aClick += 1
    playList[1] = 'a'
    clearNotes(1, 'a1')
    changeNoteType(1, aClick, a)
    if (aClick == 8){
        aClick = 0
    }
})

let bClick = 0
b.addEventListener('click', (e) => {
    bClick += 1
    if (bClick == 4){ bClick = 7}
    playList[1] = 'b'
    clearNotes(1, 'b1')
    changeNoteType(1, bClick, b)
    if (bClick == 8){
        bClick = 0
    }
})









let cHClick = 0
cH.addEventListener('click', (e) => {
    cHClick += 1
    playList[1] = 'cH'
    clearNotes(1, 'c1H')
    changeNoteType(1, cHClick, c1H)
    if (cHClick == 8){
        cHClick = 0
    }
})

let dHClick = 0
dH.addEventListener('click', (e) => {
    dHClick += 1
    playList[1] = 'dH'
    clearNotes(1, 'd1H')
    changeNoteType(1, dHClick, d1H)
    if (dHClick == 8){
        dHClick = 0
    }
})

let eHClick = 0
e_H.addEventListener('click', (e) => {
    eHClick += 1
    if (eHClick == 4){ eHClick = 7}
    playList[1] = 'eH'
    clearNotes(1, 'e1H')
    changeNoteType(1, eHClick, e1H)
    if (eHClick == 8){
        eHClick = 0
    }
})

let fHClick = 0
fH.addEventListener('click', (e) => {
    fHClick += 1
    playList[1] = 'fH'
    clearNotes(1, 'f1H')
    changeNoteType(1, fHClick, f1H)
    if (fHClick == 8){
        fHClick = 0
    }
})

let gHClick = 0
gH.addEventListener('click', (e) => {
    gHClick += 1
    playList[1] = 'gH'
    clearNotes(1, 'g1H')
    changeNoteType(1, gHClick, g1H)
    if (gHClick == 8){
        gHClick = 0
    }
})

let aHClick = 0
aH.addEventListener('click', (e) => {
    aHClick += 1
    playList[1] = 'aH'
    clearNotes(1, 'a1H')
    changeNoteType(1, aHClick, a1H)
    if (aHClick == 8){
        aHClick = 0
    }
})

let bHClick = 0
bH.addEventListener('click', (e) => {
    bHClick += 1
    if (bHClick == 4){ bHClick = 7}
    playList[1] = 'bH'
    clearNotes(1, 'b1H')
    changeNoteType(1, bHClick, b1H)
    if (bHClick == 8){
        bHClick = 0
    }
})









// Column 2
let cTwoClick = 0
c2.addEventListener('click', (e) => {
    cTwoClick += 1
    playList[2] = 'c'
    clearNotes(2, 'c2')
    changeNoteType(2, cTwoClick, c2)
    if (cTwoClick == 8){
        cTwoClick = 0

    }
})

let dTwoClick = 0
d2.addEventListener('click', (e) => {
    dTwoClick += 1
    playList[2] = 'd'
    clearNotes(2, 'd2')
    changeNoteType(2, dTwoClick, d2)
    if (dTwoClick == 8){
        dTwoClick = 0
 
    }
})

let eTwoClick = 0
e2.addEventListener('click', (e) => {
    eTwoClick += 1
    if (eTwoClick == 4){ eTwoClick = 7}
    playList[2] = 'e'
    clearNotes(2, 'e2')
    changeNoteType(2, eTwoClick, e2)
    if (eTwoClick == 8){
        eTwoClick = 0
    }
})

let fTwoClick = 0
f2.addEventListener('click', (e) => {
    fTwoClick += 1
    playList[2] = 'f'
    clearNotes(2, 'f2')
    changeNoteType(2, fTwoClick, f2)
    if (fTwoClick == 8){
        fTwoClick = 0
    }
})

let gTwoClick = 0
g2.addEventListener('click', (e) => {
    gTwoClick += 1
    playList[2] = 'g'
    clearNotes(2, 'g2')
    changeNoteType(2, gTwoClick, g2)
    if (gTwoClick == 8){
        gTwoClick = 0
    }
})

let aTwoClick = 0
a2.addEventListener('click', (e) => {
    aTwoClick += 1
    playList[2] = 'a'
    clearNotes(2, 'a2')
    changeNoteType(2, aTwoClick, a2)
    if (aTwoClick == 8){
        aTwoClick = 0
    }
})

let bTwoClick = 0
b2.addEventListener('click', (e) => {
    bTwoClick += 1
    if (bTwoClick == 4){ bTwoClick = 7}
    playList[2] = 'b'
    clearNotes(2, 'b2')
    changeNoteType(2, bTwoClick, b2)
    if (bTwoClick == 8){
        bTwoClick = 0
    }
})


// Column 3
let cThreeClick = 0
c3.addEventListener('click', (e) => {
    cThreeClick += 1
    playList[3] = 'c'
    clearNotes(3, 'c3')
    changeNoteType(3, cThreeClick, c3)
    if (cThreeClick == 8){
        cThreeClick = 0
    }
})

let dThreeClick = 0
d3.addEventListener('click', (e) => {
    dThreeClick += 1
    playList[3] = 'd'
    clearNotes(3, 'd3')
    changeNoteType(3, dThreeClick, d3)
    if (dThreeClick == 8){
        dThreeClick = 0
    }
})

let eThreeClick = 0
e3.addEventListener('click', (e) => {
    eThreeClick += 1
    if (eThreeClick == 4){ eThreeClick = 7}
    playList[3] = 'e'
    clearNotes(3, 'e3')
    changeNoteType(3, eThreeClick, e3)
    if (eThreeClick == 8){
        eThreeClick = 0
    }
})

let fThreeClick = 0
f3.addEventListener('click', (e) => {
    fThreeClick += 1
    playList[3] = 'f'
    clearNotes(3, 'f3')
    changeNoteType(3, fThreeClick, f3)
    if (fThreeClick == 8){
        fThreeClick = 0
    }
})

let gThreeClick = 0
g3.addEventListener('click', (e) => {
    gThreeClick += 1
    playList[3] = 'g'
    clearNotes(3, 'g3')
    changeNoteType(3, gThreeClick, g3)
    if (gThreeClick == 8){
        gThreeClick = 0
    }
})

let aThreeClick = 0
a3.addEventListener('click', (e) => {
    aThreeClick += 1
    playList[3] = 'a'
    clearNotes(3, 'a3')
    changeNoteType(3, aThreeClick, a3)
    if (aThreeClick == 8){
        aThreeClick = 0
    }
})

let bThreeClick = 0
b3.addEventListener('click', (e) => {
    bThreeClick += 1
    if (bThreeClick == 4){ bThreeClick = 7}
    playList[3] = 'b'
    clearNotes(3, 'b3')
    changeNoteType(3, bThreeClick, b3)
    if (bThreeClick == 8){
        bThreeClick = 0
    }
})


// Column 4
let cFourClick = 0
c4.addEventListener('click', (e) => {
    cFourClick += 1
    playList[4] = 'c'
    clearNotes(4, 'c4')
    changeNoteType(4, cFourClick, c4)
    if (cFourClick == 8){
        cFourClick = 0
    }
})

let dFourClick = 0
d4.addEventListener('click', (e) => {
    dFourClick += 1
    playList[4] = 'd'
    clearNotes(4, 'd4')
    changeNoteType(4, dFourClick, d4)
    if (dFourClick == 8){
        dFourClick = 0
    }
})

let eFourClick = 0
e4.addEventListener('click', (e) => {
    eFourClick += 1
    if (eFourClick == 4){ eFourClick = 7}
    playList[4] = 'e'
    clearNotes(4, 'e4')
    changeNoteType(4, eFourClick, e4)
    if (eFourClick == 8){
        eFourClick = 0
    }
})

let fFourClick = 0
f4.addEventListener('click', (e) => {
    fFourClick += 1
    playList[4] = 'f'
    clearNotes(4, 'f4')
    changeNoteType(4, fFourClick, f4)
    if (fFourClick == 8){
        fFourClick = 0
    }
})

let gFourClick = 0
g4.addEventListener('click', (e) => {
    gFourClick += 1
    playList[4] = 'g'
    clearNotes(4, 'g4')
    changeNoteType(4, gFourClick, g4)
    if (gFourClick == 8){
        gFourClick = 0
    }
})

let aFourClick = 0
a4.addEventListener('click', (e) => {
    aFourClick += 1
    playList[4] = 'a'
    clearNotes(4, 'a4')
    changeNoteType(4, aFourClick, a4)
    if (aFourClick == 8){
        aFourClick = 0
    }
})

let bFourClick = 0
b4.addEventListener('click', (e) => {
    bFourClick += 1
    if (bFourClick == 4){ bFourClick = 7}
    playList[4] = 'b'
    clearNotes(4, 'b4')
    changeNoteType(4, bFourClick, b4)
    if (bFourClick == 8){
        bFourClick = 0
    }
})


// Column 5
let cFiveClick = 0
c5.addEventListener('click', (e) => {
    cFiveClick += 1
    playList[5] = 'c'
    clearNotes(5, 'c5')
    changeNoteType(5, cFiveClick, c5)
    if (cFiveClick == 8){
        cFiveClick = 0
    }
})

let dFiveClick = 0
d5.addEventListener('click', (e) => {
    dFiveClick += 1
    playList[5] = 'd'
    clearNotes(5, 'd5')
    changeNoteType(5, dFiveClick, d5)
    if (dFiveClick == 8){
        dFiveClick = 0
    }
})

let eFiveClick = 0
e5.addEventListener('click', (e) => {
    eFiveClick += 1
    if (eFiveClick == 4){ eFiveClick = 7}
    playList[5] = 'e'
    clearNotes(5, 'e5')
    changeNoteType(5, eFiveClick, e5)
    if (eFiveClick == 8){
        eFiveClick = 0
    }
})

let fFiveClick = 0
f5.addEventListener('click', (e) => {
    fFiveClick += 1
    playList[5] = 'f'
    clearNotes(5, 'f5')
    changeNoteType(5, fFiveClick, f5)
    if (fFiveClick == 8){
        fFiveClick = 0
    }
})

let gFiveClick = 0
g5.addEventListener('click', (e) => {
    gFiveClick += 1
    playList[5] = 'g'
    clearNotes(5, 'g5')
    changeNoteType(5, gFiveClick, g5)
    if (gFiveClick == 8){
        gFiveClick = 0
    }
})

let aFiveClick = 0
a5.addEventListener('click', (e) => {
    aFiveClick += 1
    playList[5] = 'a'
    clearNotes(5, 'a5')
    changeNoteType(5, aFiveClick, a5)
    if (aFiveClick == 8){
        aFiveClick = 0
    }
})

let bFiveClick = 0
b5.addEventListener('click', (e) => {
    bFiveClick += 1
    if (bFiveClick == 4){ bFiveClick = 7}
    playList[5] = 'b'
    clearNotes(5, 'b5')
    changeNoteType(5, bFiveClick, b5)
    if (bFiveClick == 8){
        bFiveClick = 0
    }
})

// Column 6
let cSixClick = 0
c6.addEventListener('click', (e) => {
    cSixClick += 1
    playList[6] = 'c'
    clearNotes(6, 'c6')
    changeNoteType(6, cSixClick, c6)
    if (cSixClick == 8){
        cSixClick = 0
    }
})

let dSixClick = 0
d6.addEventListener('click', (e) => {
    dSixClick += 1
    playList[6] = 'd'
    clearNotes(6, 'd6')
    changeNoteType(6, dSixClick, d6)
    if (dSixClick == 8){
        dSixClick = 0
    }
})

let eSixClick = 0
e6.addEventListener('click', (e) => {
    eSixClick += 1
    if (eSixClick == 4){ eSixClick = 7}
    playList[6] = 'e'
    clearNotes(6, 'e6')
    changeNoteType(6, eSixClick, e6)
    if (eSixClick == 8){
        eSixClick = 0
    }
})

let fSixClick = 0
f6.addEventListener('click', (e) => {
    fSixClick += 1
    playList[6] = 'f'
    clearNotes(6, 'f6')
    changeNoteType(6, fSixClick, f6)
    if (fSixClick == 8){
        fSixClick = 0
    }
})

let gSixClick = 0
g6.addEventListener('click', (e) => {
    gSixClick += 1
    playList[6] = 'g'
    clearNotes(6, 'g6')
    changeNoteType(6, gSixClick, g6)
    if (gSixClick == 8){
        gSixClick = 0
    }
})

let aSixClick = 0
a6.addEventListener('click', (e) => {
    aSixClick += 1
    playList[6] = 'a'
    clearNotes(6, 'a6')
    changeNoteType(6, aSixClick, a6)
    if (aSixClick == 8){
        aSixClick = 0
    }
})

let bSixClick = 0
b6.addEventListener('click', (e) => {
    bSixClick += 1
    if (bSixClick == 4){ bSixClick = 7}
    playList[6] = 'b'
    clearNotes(6, 'b6')
    changeNoteType(6, bSixClick, b6)
    if (bSixClick == 8){
        bSixClick = 0
    }
})

function changeNoteType(column, counter, note) {
    if (counter == 1){
        note.style.color = 'red'
        note.innerHTML = '<i class="far fa-circle"></i>'
        duration[column +1] = 1000
    }
    else if (counter == 2){
        note.style.color = 'black'
        // note.style.transform = "scale(0.5)"
        note.innerHTML = '<i class="far fa-circle"></i>'
        duration[column +1] = 500
    }
    else if (counter == 3){
        duration[column +1] = 250
        note.innerHTML = '<i class="fas fa-circle"></i>'
    }
    else if (counter == 4){
        note.style.color = 'red'
        note.innerHTML = '#'
        playList[column] = `${playList[column]}Sharp`
        duration[column +1] = 1000
    }
    else if (counter == 5){
        note.innerHTML = '#'
        playList[column] = `${playList[column]}Sharp`
        duration[column +1] = 500
    }
    else if (counter == 6){
        note.innerHTML = '#.'
        duration[column +1] = 250
        playList[column] = `${playList[column]}Sharp`
    }
    else if (counter == 7){
        duration[column +1] = 500
        playList[column] = 'mute'
        note.style.color = 'black'
        note.innerHTML = 'R'
    }
    else if (counter == 8){
        duration[column +1] = 250
        playList[column] = 'mute'
        note.style.color = 'black'
        note.innerHTML = 'r'
    }
}

const notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'a']

function clearNotes(column, cn) {
    for (let i = 0; i < notes.length; i++){
        let idStr = notes[i] + column.toString()
        if (i > 6) { idStr = idStr+'H'}
        console.log(idStr)
        let columnBtns = document.getElementById(idStr)
        columnBtns.style.opacity = .1
        columnBtns.innerHTML = 'o'
        // console.log(notes[1], column)
    }
    document.getElementById(cn).style.opacity = .9
}

const playList = ['mute']
const duration = [0, 0, 0, 0, 0, 0]

const playSequence = document.getElementById('playSequence')
playSequence.addEventListener('click', (e) => {

    let timeVar = 0
    for (let i = 0; i < playList.length; i ++){
        timeVar += duration[i]
        setTimeout(() =>{new Audio(`./sounds/${playList[i]}.mp3`).play()}, timeVar)
    }
})

const c = document.getElementById('c1')
const d = document.getElementById('d1')
const e_ = document.getElementById('e1')
const f = document.getElementById('f1')
const g = document.getElementById('g1')
const a = document.getElementById('a1')
const b = document.getElementById('b1')
const cL = document.getElementById('c1L')
const dL = document.getElementById('d1L')
const e_L = document.getElementById('e1L')
const fL = document.getElementById('f1L')
const gL = document.getElementById('g1L')
const aL = document.getElementById('a1L')
const bL = document.getElementById('b1L')

const c2 = document.getElementById('c2')
const d2 = document.getElementById('d2')
const e2 = document.getElementById('e2')
const f2 = document.getElementById('f2')
const g2 = document.getElementById('g2')
const a2 = document.getElementById('a2')
const b2 = document.getElementById('b2L')
const c2L = document.getElementById('c2L')
const d2L = document.getElementById('d2L')
const e2L = document.getElementById('e2L')
const f2L = document.getElementById('f2L')
const g2L = document.getElementById('g2L')
const a2L = document.getElementById('a2L')
const b2L = document.getElementById('b2L')

const c3 = document.getElementById('c3')
const d3 = document.getElementById('d3')
const e3 = document.getElementById('e3')
const f3 = document.getElementById('f3')
const g3 = document.getElementById('g3')
const a3 = document.getElementById('a3')
const b3 = document.getElementById('b3')
const c3L = document.getElementById('c3L')
const d3L = document.getElementById('d3L')
const e3L = document.getElementById('e3L')
const f3L = document.getElementById('f3L')
const g3L = document.getElementById('g3L')
const a3L = document.getElementById('a3L')
const b3L = document.getElementById('b3L')

const c4 = document.getElementById('c4')
const d4 = document.getElementById('d4')
const e4 = document.getElementById('e4')
const f4 = document.getElementById('f4')
const g4 = document.getElementById('g4')
const a4 = document.getElementById('a4')
const b4 = document.getElementById('b4')
const c4L = document.getElementById('c4L')
const d4L = document.getElementById('d4L')
const e4L = document.getElementById('e4L')
const f4L = document.getElementById('f4L')
const g4L = document.getElementById('g4L')
const a4L = document.getElementById('a4L')
const b4L = document.getElementById('b4L')

const c5 = document.getElementById('c5')
const d5 = document.getElementById('d5')
const e5 = document.getElementById('e5')
const f5 = document.getElementById('f5')
const g5 = document.getElementById('g5')
const a5 = document.getElementById('a5')
const b5 = document.getElementById('b5')
const c5L = document.getElementById('c5L')
const d5L = document.getElementById('d5L')
const e5L = document.getElementById('e5L')
const f5L = document.getElementById('f5L')
const g5L = document.getElementById('g5L')
const a5L = document.getElementById('a5L')
const b5L = document.getElementById('b5L')

const c6 = document.getElementById('c6')
const d6 = document.getElementById('d6')
const e6 = document.getElementById('e6')
const f6 = document.getElementById('f6')
const g6 = document.getElementById('g6')
const a6 = document.getElementById('a6')
const b6 = document.getElementById('b6')
const c6L = document.getElementById('c6L')
const d6L = document.getElementById('d6L')
const e6L = document.getElementById('e6L')
const f6L = document.getElementById('f6L')
const g6L = document.getElementById('g6L')
const a6L = document.getElementById('a6L')
const b6L = document.getElementById('b6L')

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

// Column 1 low

let cLClick = 0
cL.addEventListener('click', (e) => {
    cLClick += 1
    playList[1] = 'cL'
    clearNotes(1, 'c1L')
    changeNoteType(1, cLClick, c1L)
    if (cLClick == 8){
        cLClick = 0
    }
})

let dLClick = 0
dL.addEventListener('click', (e) => {
    dLClick += 1
    playList[1] = 'dL'
    clearNotes(1, 'd1L')
    changeNoteType(1, dLClick, d1L)
    if (dLClick == 8){
        dLClick = 0
    }
})

let eLClick = 0
e_L.addEventListener('click', (e) => {
    eLClick += 1
    if (eLClick == 4){ eLClick = 7}
    playList[1] = 'eL'
    clearNotes(1, 'e1L')
    changeNoteType(1, eLClick, e1L)
    if (eLClick == 8){
        eLClick = 0
    }
})

let fLClick = 0
fL.addEventListener('click', (e) => {
    fLClick += 1
    playList[1] = 'fL'
    clearNotes(1, 'f1L')
    changeNoteType(1, fLClick, f1L)
    if (fLClick == 8){
        fLClick = 0
    }
})

let gLClick = 0
gL.addEventListener('click', (e) => {
    gLClick += 1
    playList[1] = 'gL'
    clearNotes(1, 'g1L')
    changeNoteType(1, gLClick, g1L)
    if (gLClick == 8){
        gLClick = 0
    }
})

let aLClick = 0
aL.addEventListener('click', (e) => {
    aLClick += 1
    playList[1] = 'aL'
    clearNotes(1, 'a1L')
    changeNoteType(1, aLClick, a1L)
    if (aLClick == 8){
        aLClick = 0
    }
})

let bLClick = 0
bL.addEventListener('click', (e) => {
    bLClick += 1
    if (bLClick == 4){ bLClick = 7}
    playList[1] = 'bL'
    clearNotes(1, 'b1L')
    changeNoteType(1, bLClick, b1L)
    if (bLClick == 8){
        bLClick = 0
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


// Column 2 Low
let cLTwoClick = 0
c2L.addEventListener('click', (e) => {
    cLTwoClick += 1
    playList[2] = 'cL'
    clearNotes(2, 'c2L')
    changeNoteType(2, cLTwoClick, c2L)
    if (cLTwoClick == 8){
        cLTwoClick = 0

    }
})

let dLTwoClick = 0
d2L.addEventListener('click', (e) => {
    dLTwoClick += 1
    playList[2] = 'dL'
    clearNotes(2, 'd2L')
    changeNoteType(2, dLTwoClick, d2L)
    if (dLTwoClick == 8){
        dLTwoClick = 0
 
    }
})

let eLTwoClick = 0
e2L.addEventListener('click', (e) => {
    eLTwoClick += 1
    if (eLTwoClick == 4){ eLTwoClick = 7}
    playList[2] = 'eL'
    clearNotes(2, 'e2L')
    changeNoteType(2, eLTwoClick, e2L)
    if (eLTwoClick == 8){
        eLTwoClick = 0
    }
})

let fLTwoClick = 0
f2L.addEventListener('click', (e) => {
    fLTwoClick += 1
    playList[2] = 'fL'
    clearNotes(2, 'f2L')
    changeNoteType(2, fLTwoClick, f2L)
    if (fLTwoClick == 8){
        fLTwoClick = 0
    }
})

let gLTwoClick = 0
g2L.addEventListener('click', (e) => {
    gLTwoClick += 1
    playList[2] = 'gL'
    clearNotes(2, 'g2L')
    changeNoteType(2, gLTwoClick, g2L)
    if (gLTwoClick == 8){
        gLTwoClick = 0
    }
})

let aLTwoClick = 0
a2L.addEventListener('click', (e) => {
    aLTwoClick += 1
    playList[2] = 'aL'
    clearNotes(2, 'a2L')
    changeNoteType(2, aLTwoClick, a2L)
    if (aLTwoClick == 8){
        aLTwoClick = 0
    }
})

let bLTwoClick = 0
b2L.addEventListener('click', (e) => {
    bLTwoClick += 1
    if (bLTwoClick == 4){ bLTwoClick = 7}
    playList[2] = 'bL'
    clearNotes(2, 'b2L')
    changeNoteType(2, bLTwoClick, b2L)
    if (bLTwoClick == 8){
        bLTwoClick = 0
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


// Column 3 Low
let cLThreeClick = 0
c3L.addEventListener('click', (e) => {
    cLThreeClick += 1
    playList[3] = 'cL'
    clearNotes(3, 'c3L')
    changeNoteType(3, cLThreeClick, c3L)
    if (cLThreeClick == 8){
        cLThreeClick = 0
    }
})

let dLThreeClick = 0
d3L.addEventListener('click', (e) => {
    dLThreeClick += 1
    playList[3] = 'dL'
    clearNotes(3, 'd3L')
    changeNoteType(3, dLThreeClick, d3L)
    if (dLThreeClick == 8){
        dLThreeClick = 0
    }
})

let eLThreeClick = 0
e3L.addEventListener('click', (e) => {
    eLThreeClick += 1
    if (eLThreeClick == 4){ eLThreeClick = 7}
    playList[3] = 'eL'
    clearNotes(3, 'e3L')
    changeNoteType(3, eLThreeClick, e3L)
    if (eLThreeClick == 8){
        eLThreeClick = 0
    }
})

let fLThreeClick = 0
f3L.addEventListener('click', (e) => {
    fLThreeClick += 1
    playList[3] = 'fL'
    clearNotes(3, 'f3L')
    changeNoteType(3, fLThreeClick, f3L)
    if (fLThreeClick == 8){
        fLThreeClick = 0
    }
})

let gLThreeClick = 0
g3L.addEventListener('click', (e) => {
    gLThreeClick += 1
    playList[3] = 'gL'
    clearNotes(3, 'g3L')
    changeNoteType(3, gLThreeClick, g3L)
    if (gLThreeClick == 8){
        gLThreeClick = 0
    }
})

let aLThreeClick = 0
a3L.addEventListener('click', (e) => {
    aLThreeClick += 1
    playList[3] = 'aL'
    clearNotes(3, 'a3L')
    changeNoteType(3, aLThreeClick, a3L)
    if (aLThreeClick == 8){
        aLThreeClick = 0
    }
})

let bLThreeClick = 0
b3L.addEventListener('click', (e) => {
    bLThreeClick += 1
    if (bLThreeClick == 4){ bLThreeClick = 7}
    playList[3] = 'bL'
    clearNotes(3, 'b3L')
    changeNoteType(3, bLThreeClick, b3L)
    if (bLThreeClick == 8){
        bLThreeClick = 0
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




// Column 4 Low
let cLFourClick = 0
c4L.addEventListener('click', (e) => {
    cLFourClick += 1
    playList[4] = 'cL'
    clearNotes(4, 'c4L')
    changeNoteType(4, cLFourClick, c4L)
    if (cLFourClick == 8){
        cLFourClick = 0
    }
})

let dLFourClick = 0
d4L.addEventListener('click', (e) => {
    dLFourClick += 1
    playList[4] = 'dL'
    clearNotes(4, 'd4L')
    changeNoteType(4, dLFourClick, d4L)
    if (dLFourClick == 8){
        dLFourClick = 0
    }
})

let eLFourClick = 0
e4L.addEventListener('click', (e) => {
    eLFourClick += 1
    if (eLFourClick == 4){ eLFourClick = 7}
    playList[4] = 'eL'
    clearNotes(4, 'e4L')
    changeNoteType(4, eLFourClick, e4L)
    if (eLFourClick == 8){
        eLFourClick = 0
    }
})

let fLFourClick = 0
f4L.addEventListener('click', (e) => {
    fLFourClick += 1
    playList[4] = 'fL'
    clearNotes(4, 'f4L')
    changeNoteType(4, fLFourClick, f4L)
    if (fLFourClick == 8){
        fLFourClick = 0
    }
})

let gLFourClick = 0
g4L.addEventListener('click', (e) => {
    gLFourClick += 1
    playList[4] = 'gL'
    clearNotes(4, 'g4L')
    changeNoteType(4, gLFourClick, g4L)
    if (gLFourClick == 8){
        gLFourClick = 0
    }
})

let aLFourClick = 0
a4L.addEventListener('click', (e) => {
    aLFourClick += 1
    playList[4] = 'aL'
    clearNotes(4, 'a4L')
    changeNoteType(4, aLFourClick, a4L)
    if (aLFourClick == 8){
        aLFourClick = 0
    }
})

let bLFourClick = 0
b4L.addEventListener('click', (e) => {
    bLFourClick += 1
    if (bLFourClick == 4){ bLFourClick = 7}
    playList[4] = 'bL'
    clearNotes(4, 'b4L')
    changeNoteType(4, bLFourClick, b4L)
    if (bLFourClick == 8){
        bLFourClick = 0
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


// Column 5 Low
let cLFiveClick = 0
c5L.addEventListener('click', (e) => {
    cLFiveClick += 1
    playList[5] = 'cL'
    clearNotes(5, 'c5L')
    changeNoteType(5, cLFiveClick, c5L)
    if (cLFiveClick == 8){
        cLFiveClick = 0
    }
})

let dLFiveClick = 0
d5L.addEventListener('click', (e) => {
    dLFiveClick += 1
    playList[5] = 'dL'
    clearNotes(5, 'd5L')
    changeNoteType(5, dLFiveClick, d5L)
    if (dLFiveClick == 8){
        dLFiveClick = 0
    }
})

let eLFiveClick = 0
e5L.addEventListener('click', (e) => {
    eLFiveClick += 1
    if (eLFiveClick == 4){ eLFiveClick = 7}
    playList[5] = 'eL'
    clearNotes(5, 'e5L')
    changeNoteType(5, eLFiveClick, e5L)
    if (eLFiveClick == 8){
        eLFiveClick = 0
    }
})

let fLFiveClick = 0
f5L.addEventListener('click', (e) => {
    fLFiveClick += 1
    playList[5] = 'fL'
    clearNotes(5, 'f5L')
    changeNoteType(5, fLFiveClick, f5L)
    if (fLFiveClick == 8){
        fLFiveClick = 0
    }
})

let gLFiveClick = 0
g5L.addEventListener('click', (e) => {
    gLFiveClick += 1
    playList[5] = 'gL'
    clearNotes(5, 'g5L')
    changeNoteType(5, gLFiveClick, g5L)
    if (gLFiveClick == 8){
        gLFiveClick = 0
    }
})

let aLFiveClick = 0
a5L.addEventListener('click', (e) => {
    aLFiveClick += 1
    playList[5] = 'aL'
    clearNotes(5, 'a5L')
    changeNoteType(5, aLFiveClick, a5L)
    if (aLFiveClick == 8){
        aLFiveClick = 0
    }
})

let bLFiveClick = 0
b5L.addEventListener('click', (e) => {
    bLFiveClick += 1
    if (bLFiveClick == 4){ bLFiveClick = 7}
    playList[5] = 'bL'
    clearNotes(5, 'b5L')
    changeNoteType(5, bLFiveClick, b5L)
    if (bLFiveClick == 8){
        bLFiveClick = 0
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



// Column 6 Low
let cLSixClick = 0
c6L.addEventListener('click', (e) => {
    cLSixClick += 1
    playList[6] = 'cL'
    clearNotes(6, 'c6L')
    changeNoteType(6, cLSixClick, c6L)
    if (cLSixClick == 8){
        cLSixClick = 0
    }
})

let dLSixClick = 0
d6L.addEventListener('click', (e) => {
    dLSixClick += 1
    playList[6] = 'dL'
    clearNotes(6, 'd6L')
    changeNoteType(6, dLSixClick, d6L)
    if (dLSixClick == 8){
        dLSixClick = 0
    }
})

let eLSixClick = 0
e6L.addEventListener('click', (e) => {
    eLSixClick += 1
    if (eLSixClick == 4){ eLSixClick = 7}
    playList[6] = 'eL'
    clearNotes(6, 'e6L')
    changeNoteType(6, eLSixClick, e6L)
    if (eLSixClick == 8){
        eLSixClick = 0
    }
})

let fLSixClick = 0
f6L.addEventListener('click', (e) => {
    fLSixClick += 1
    playList[6] = 'fL'
    clearNotes(6, 'f6L')
    changeNoteType(6, fLSixClick, f6L)
    if (fLSixClick == 8){
        fLSixClick = 0
    }
})

let gLSixClick = 0
g6L.addEventListener('click', (e) => {
    gLSixClick += 1
    playList[6] = 'gL'
    clearNotes(6, 'g6L')
    changeNoteType(6, gLSixClick, g6L)
    if (gLSixClick == 8){
        gLSixClick = 0
    }
})

let aLSixClick = 0
a6L.addEventListener('click', (e) => {
    aLSixClick += 1
    playList[6] = 'aL'
    clearNotes(6, 'a6L')
    changeNoteType(6, aLSixClick, a6L)
    if (aLSixClick == 8){
        aLSixClick = 0
    }
})

let bLSixClick = 0
b6L.addEventListener('click', (e) => {
    bLSixClick += 1
    if (bLSixClick == 4){ bLSixClick = 7}
    playList[6] = 'bL'
    clearNotes(6, 'b6L')
    changeNoteType(6, bLSixClick, b6L)
    if (bLSixClick == 8){
        bLSixClick = 0
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

const notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'c', 'd', 'e', 'f', 'g']

function clearNotes(column, cn) {
    for (let i = 0; i < notes.length; i++){
        let idStr = notes[i] + column.toString()
        if (i > 6) { idStr = idStr+'L'}
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

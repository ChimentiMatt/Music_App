const c = document.getElementById('c')
const b = document.getElementById('b')

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
    // console.log(playList)
})

b.addEventListener('click', (e) => {
    playList[0] = 'b'
    console.log(playList)
  
})




let bu = 1000
let sp
let i
let myInterval

document.querySelector('#budget').innerHTML = bu + ' €'

function spesa(){
    sp = Math.ceil(Math.random() * 200)
    if(sp > bu){
        clearInterval(myInterval)
        document.querySelector('#spesa').innerHTML += '<br> Spesa conclusa'
    }else{
        bu -= sp;
        document.querySelector('#spesa').innerHTML += bu + '<br>'
    }

    if(bu > 500){
        i++
    }else if(i > 0){
        document.querySelector('#spesa').innerHTML += `<br> Hai acquistato ${i} articoli e hai speso metá del budget. Continuare? <br> <button id="si">Sí</button> <button id="no">No</button> <br>`
        i = 0
        clearInterval(myInterval)
        document.querySelector('#si').addEventListener('click',function(){
            document.querySelector('#spesa').innerHTML += '<br>'
            myInterval = setInterval(spesa, 1000)
        })

        document.querySelector('#no').addEventListener('click',function(){
            document.querySelector('#spesa').innerHTML += '<br> Spesa conclusa'
        })
    }
}


document.querySelector('#start').addEventListener('click',function(){
    clearInterval(myInterval)
    bu = 1000
    i = 1
    document.querySelector('#spesa').innerHTML = ' '
    myInterval = setInterval(spesa, 1000)
})

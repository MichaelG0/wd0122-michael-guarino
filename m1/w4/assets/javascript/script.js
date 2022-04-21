
//bottoni info

let info = document.querySelector('.infobutton')

info.addEventListener('mouseover',function(e){

    e.target.style.color = 'white'
    e.target.style.backgroundColor = 'rgb(255, 72, 0)'
})
info.addEventListener('mouseleave',function(e){

    e.target.style.color = 'rgb(255, 72, 0)'
    e.target.style.backgroundColor = 'white'
})


let info2 = document.querySelector('.blog-button')

info2.addEventListener('mouseover',function(e2){
    e2.target.style.color = 'rgb(255, 72, 0)'
    e2.target.style.backgroundColor = 'rgb(0, 0, 0, 0)'
})

info2.addEventListener('mouseleave',function(e2){
    e2.target.style.color = 'white'
    e2.target.style.backgroundColor = 'rgb(255, 72, 0)'
})


// let line = document.querySelectorAll('linea')

// line.addEventListener('muoseover' ,function(e3){
//     e2.target.style.textDecoration = 'underline'
    
// })

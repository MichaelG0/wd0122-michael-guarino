let button = document.querySelector('button')
let cube = document.querySelector('.cube')
let i = 0

button.addEventListener('click', function(e){
    i++

    if(i == 1){
        cube.classList.add('start')
    }else{
        cube.classList.remove('start')
        i = 0
    }
})
let button = document.querySelector('.button')
let cubes = document.querySelectorAll('.start')
let bigCube = document.querySelector('.big-cube')
let arrL = document.querySelector('.arr-wrp-l')
let arrR = document.querySelector('.arr-wrp-r')
let n = 1, rot = 1
    
    
function animationCounter(){
    rot++
    if (rot % 20 == 0 && n % 2 == 0){
        for(const cube of cubes){
            cube.style.animationPlayState = 'paused'
        }
        rot = 0
    }
    console.log(rot);
}

let interval = setInterval(animationCounter, 200)

button.addEventListener('click', function(){
    n++
    if(n % 2 != 0){
        for(const cube of cubes){
            if(cube.style.animationPlayState == 'paused'){
                cube.style.animationPlayState = 'running'
                rot = 0
            }
            button.classList.remove('fa-circle-play')
            button.classList.add('fa-circle-pause')
        }
    }else{
        button.classList.remove('fa-circle-pause')
        button.classList.add('fa-circle-play')
    }
})



let a = 0
arrL.addEventListener('click', function(){
    a++
    if(a > 3 || a < -3){
        setTimeout(function() {
            a = 0
            bigCube.style.transition = 'transform 0s'
            angle = bigCube.style.transform = `rotateY(${a * 90}deg)`
            console.log(a)
        }, 300)
    }
    bigCube.style.transition = 'transform .3s'
    angle = bigCube.style.transform = `rotateY(${a * 90}deg)`
    console.log(angle);
})
arrR.addEventListener('click', function(){
    a--
    if(a > 3 || a < -3){
        setTimeout(function() {
            a = 0
            bigCube.style.transition = 'transform 0s'
            angle = bigCube.style.transform = `rotateY(${a * 90}deg)`
            console.log(a)
        }, 300)
    }
    bigCube.style.transition = 'transform .3s'
    angle = bigCube.style.transform = `rotateY(${a * 90}deg)`
    console.log(angle);
})

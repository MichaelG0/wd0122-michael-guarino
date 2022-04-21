
//bottoni info

/*
.infobutton,.blog-button {
    color: rgb(255, 72, 0);
    background-color: white
}
.infobutton:hover,.blog-button:hover {
    background-color: rgb(255, 72, 0);
    color: white
}
 */

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


// CAROSELLO

const next = document.querySelector('.avanti')


let img = document.querySelector('.scroller')

let n = 0

next.addEventListener('click', function(e){
    n++
    if(n > 4){
        n = 0
    }
    let p = -25 * n;
    img.style.transform = 'translateX(' + p + '%)'
    img.style.transition = "all 2s";
})


// nav bar

window.addEventListener('scroll',function(e) {
    let s = this.scrollY
    
    let s2 = document.querySelector('#aboutus').offsetTop - 250
    
    let s3 = document.querySelector('#blog').offsetTop - 250
    
    let s4 = document.querySelector('#menu').offsetTop - 250
    
    let s5 = document.querySelector('#news').offsetTop - 250
    
    let s6 = document.querySelector('#contatti').offsetTop - 250


    if(s < s2){
        this.document.querySelectorAll('#navdesktop li')[0].style.textDecoration = 'underline'
        this.document.querySelectorAll('#navmobile li')[0].style.textDecoration = 'underline'
    }else{
        this.document.querySelectorAll('#navdesktop li')[0].style.textDecoration = 'none'
        this.document.querySelectorAll('#navmobile li')[0].style.textDecoration = 'none'
    }
    if(s >= s2 && s < s3){
        this.document.querySelectorAll('#navdesktop li')[1].style.textDecoration = 'underline'
        this.document.querySelectorAll('#navmobile li')[1].style.textDecoration = 'underline'
    }else{
        this.document.querySelectorAll('#navdesktop li')[1].style.textDecoration = 'none'
        this.document.querySelectorAll('#navmobile li')[1].style.textDecoration = 'none'
    }
    if(s >= s3 && s < s4){
        this.document.querySelectorAll('#navdesktop li')[2].style.textDecoration = 'underline'
        this.document.querySelectorAll('#navmobile li')[2].style.textDecoration = 'underline'
    }else{
        this.document.querySelectorAll('#navdesktop li')[2].style.textDecoration = 'none'
        this.document.querySelectorAll('#navmobile li')[2].style.textDecoration = 'none'
    }
    if(s >= s4 && s < s5){
        this.document.querySelectorAll('#navdesktop li')[3].style.textDecoration = 'underline'
        this.document.querySelectorAll('#navmobile li')[3].style.textDecoration = 'underline'
    }else{
        this.document.querySelectorAll('#navdesktop li')[3].style.textDecoration = 'none'
        this.document.querySelectorAll('#navmobile li')[3].style.textDecoration = 'none'
    }
    if(s >= s5 && s < s6){
        this.document.querySelectorAll('#navdesktop li')[4].style.textDecoration = 'underline'
        this.document.querySelectorAll('#navmobile li')[4].style.textDecoration = 'underline'
    }else{
        this.document.querySelectorAll('#navdesktop li')[4].style.textDecoration = 'none'
        this.document.querySelectorAll('#navmobile li')[4].style.textDecoration = 'none'
    }
    if(s >= s6){
        this.document.querySelectorAll('#navdesktop li')[5].style.textDecoration = 'underline'
        this.document.querySelectorAll('#navmobile li')[5].style.textDecoration = 'underline'
    }else{
        this.document.querySelectorAll('#navdesktop li')[5].style.textDecoration = 'none'
        this.document.querySelectorAll('#navmobile li')[5].style.textDecoration = 'none'
    }
})
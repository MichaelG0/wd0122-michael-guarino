let x = document.querySelector('p')
let y = document.querySelector('input');

function addNum(key){
    let n = key.innerHTML
    let firstDigs = y.value.slice(0)
    if(firstDigs == '0' && n == '0'){
        return
    }
    if(x.innerHTML == '' && (n=='*' || n=='/') && (y.value == '' || y.value == '+' || y.value == '-' || y.value == '*' || y.value == '/')){
        return
    }
    if(x.innerHTML == '' && (n=='+' || n=='-') && (y.value == '' || y.value == '+' || y.value == '-' || y.value == '*' || y.value == '/')){
        y.value = n
    }
    if(y.value.includes('.') && (n == '.')){return}
    if((y.value == '+' || y.value == '-' || y.value == '*' || y.value == '/') && (n=='+' || n=='-' || n=='*' || n=='/')){
        y.value = n
    }else if(n=='+' || n=='-' || n=='*' || n=='/'){
        x.innerHTML = eval(x.innerHTML + y.value)
        y.value = n
    }else{
        y.value += n
    }
}

function del(){
    y.value = y.value.slice(0, -1)
}

function allClear(){
    x.innerHTML = ''
    y.value = ''
}

function result(){
    if(x.innerHTML == '' && y.value == ''){
        return
    }else{
        y.value = eval(x.innerHTML + y.value)
        x.innerHTML = ''
    }
}
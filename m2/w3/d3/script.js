fetch('discografia.json')
.then(res => res.json())
.then(e => {
    console.log(e)
    console.log(e.discografia)
    console.log(e.discografia[0])
    localStorage.setItem("CD1", e.discografia[0].title)
    localStorage.setItem("CD2", e.discografia[1].title)
})


let CD1 = localStorage.getItem("CD1")
let CD2 = localStorage.getItem("CD2")


document.write(CD1 + '<hr>')
document.write(CD2 + '<hr>')


localStorage.clear();
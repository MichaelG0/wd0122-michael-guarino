let demo = document.getElementById('demo');
demo.innerHTML = '<h2>Prova</h2>';
demo.style.backgroundColor = 'orange'

{
    var x = 5
    document.write(x)
}
document.write('<br>' + x)
{
    let y = 9
    document.write('<br>' + y)
}
// document.write('<br>' + y)   ERRORE

const z = 12
// const z = 15     ERRORE
document.write('<br>' + z)

let bool = true
document.write('<br> valore = ' + bool)

x += z
document.write('<br>' + x)
x += 3
document.write('<br>' + x)
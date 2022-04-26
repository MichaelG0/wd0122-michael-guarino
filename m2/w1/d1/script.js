let d = new Date();

document.querySelector('#fulldate').innerHTML = d
document.querySelector('#year').innerHTML = d.getFullYear()
document.querySelector('#month').innerHTML = d.getMonth()
document.querySelector('#day').innerHTML = d.getDate()


let wd = new Intl.DateTimeFormat('it', { weekday: 'long' }).format(d)
let da = new Intl.DateTimeFormat('it', { day: '2-digit' }).format(d)
let mo = new Intl.DateTimeFormat('it', { month: 'long' }).format(d)
let ye = new Intl.DateTimeFormat('it', { year: 'numeric' }).format(d)

document.querySelector('#localedate').innerHTML = `${wd} ${da} ${mo} ${ye}`

function randomNum(): number {
    return Math.floor(Math.random() * 10) + 1
}

const BTN = document.querySelector('button')
const WIN = document.querySelector('#win')
const GENNUM = document.querySelector('#gen-num')

BTN.addEventListener('click', () => {
    let x: number = parseInt((<HTMLInputElement>document.querySelector('#plr1')).value)
    let y: number = parseInt((<HTMLInputElement>document.querySelector('#plr2')).value)

    let n: number = randomNum()
    GENNUM.innerHTML = `Generated number: <span>${n}</span>`

    if (x === y === n) {
        WIN.innerHTML = 'Both players won'
    } else if (x === n) {
        WIN.innerHTML = 'Player 1 won'
    } else if (y === n) {
        WIN.innerHTML = 'Player 2 won'
    } else if (Math.abs(n - x) === Math.abs(n - y)){
        WIN.innerHTML = 'No one won'
    } else if (Math.abs(n - x) < Math.abs(n - y)){
        WIN.innerHTML = 'No one won, but Player 1 got closer'
    } else if (Math.abs(n - x) > Math.abs(n - y)){
        WIN.innerHTML = 'No one won, but Player 2 got closer'
    }
})


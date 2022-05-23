function randomNum(): number {
    return Math.floor(Math.random() * 10) + 1
}

const BTN = document.querySelector('button')
const GENNUM = document.querySelector('#gen-num')
const WIN = document.querySelector('#win')

function compare(x: number, y: number): string {
    let n: number = randomNum()
    GENNUM.innerHTML = `Generated number: <span>${n}</span>`

    if (x === n && y === n) {
        return 'Both players won'
    } else if (x === n) {
        return 'Player 1 won'
    } else if (y === n) {
        return 'Player 2 won'
    } else if (Math.abs(n - x) === Math.abs(n - y)) {
        return 'No one won'
    } else if (Math.abs(n - x) < Math.abs(n - y)) {
        return 'No one won, but Player 1 got closer'
    } else if (Math.abs(n - x) > Math.abs(n - y)) {
        return 'No one won, but Player 2 got closer'
    }
}

BTN.addEventListener('click', (e) => {
    let a: number = parseInt((<HTMLInputElement>document.querySelector('#plr1')).value)
    let b: number = parseInt((<HTMLInputElement>document.querySelector('#plr2')).value)
    if (1 <= a && a <= 10 && 1 <= b && b <= 10) {
        e.preventDefault()
        WIN.innerHTML = compare(a, b)
    } else {
        GENNUM.innerHTML = ''
        WIN.innerHTML = ''
    }
})

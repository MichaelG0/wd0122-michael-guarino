function randomNum() {
    return Math.floor(Math.random() * 10) + 1;
}
var BTN = document.querySelector('button');
var WIN = document.querySelector('#win');
var GENNUM = document.querySelector('#gen-num');
BTN.addEventListener('click', function () {
    var x = parseInt(document.querySelector('#plr1').value);
    var y = parseInt(document.querySelector('#plr2').value);
    var n = randomNum();
    GENNUM.innerHTML = "Generated number: <span>".concat(n, "</span>");
    if (x === y === n) {
        WIN.innerHTML = 'Both players won';
    }
    else if (x === n) {
        WIN.innerHTML = 'Player 1 won';
    }
    else if (y === n) {
        WIN.innerHTML = 'Player 2 won';
    }
    else if (Math.abs(n - x) === Math.abs(n - y)) {
        WIN.innerHTML = 'No one won';
    }
    else if (Math.abs(n - x) < Math.abs(n - y)) {
        WIN.innerHTML = 'No one won, but Player 1 got closer';
    }
    else if (Math.abs(n - x) > Math.abs(n - y)) {
        WIN.innerHTML = 'No one won, but Player 2 got closer';
    }
});

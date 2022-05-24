"use strict";
class SonAccount {
    constructor(b) {
        this.dpt = 0;
        this.wdw = 0;
        this.blc = b;
    }
    deposit(n) {
        this.dpt = n;
        this.blc += this.dpt;
        return this.dpt;
    }
    withdraw(n) {
        this.wdw = n;
        this.blc -= this.wdw;
        return this.wdw;
    }
    totalBalance() {
        return this.blc;
    }
}
console.log('------------son account----------------- ' + '\n');
// set della proprietÃ  al costruttore
let son = new SonAccount(0);
console.log(son);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit: ' + son.deposit(1000));
console.log('withdraw: ' + son.withdraw(500));
console.log('withdraw: ' + son.withdraw(400));
console.log('totalBalance: ' + son.totalBalance());
class MotherAccount extends SonAccount {
    constructor(b) {
        super(b);
    }
    withdraw(n) {
        this.wdw = n + this.addInterest(n);
        this.blc -= this.wdw;
        return this.wdw;
    }
    addInterest(n) {
        return n * 0.1;
    }
}
let mother = new MotherAccount(0);
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit: ' + mother.deposit(1000));
console.log('withdraw: ' + mother.withdraw(500));
console.log('withdraw: ' + mother.withdraw(400));
console.log('totalBalance: ' + mother.totalBalance());
//# sourceMappingURL=app.js.map
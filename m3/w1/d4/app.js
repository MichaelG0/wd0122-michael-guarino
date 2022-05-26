"use strict";
class Abbigliamento {
    constructor(arr) {
        this.prezzo = arr.prezzoivainclusa;
        this.saldo = arr.saldo;
    }
    getSaldoCapo() {
        return this.prezzo * this.saldo / 100;
    }
    getAcquistoCapo() {
        return this.prezzo - this.getSaldoCapo();
    }
}
fetch('Abbigliamento.json')
    .then((res) => res.json())
    .then(res => {
    for (let capo of res) {
        let c = new Abbigliamento(capo);
        console.log(capo.capo);
        console.log(`Sconto: ${c.getSaldoCapo()}$`);
        console.log(`Prezzo finale: ${c.getAcquistoCapo()}$`);
    }
});
//# sourceMappingURL=app.js.map
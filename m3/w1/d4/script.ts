interface MyArr {
    prezzoivainclusa: number
    saldo: number
}

class Abbigliamento {
    prezzo: number
    saldo: number
    constructor(arr: MyArr) {
        this.prezzo = arr.prezzoivainclusa
        this.saldo = arr.saldo
    }

    getSaldoCapo(): number {
        return this.prezzo * this.saldo / 100
    }

    getAcquistoCapo(): number {
        return this.prezzo - this.getSaldoCapo()
    }
}

fetch('Abbigliamento.json')
    .then((res) => res.json())
    .then(res => {
        for (let capo of res) {
            let c = new Abbigliamento(capo)
            console.log(capo.capo);
            console.log(`Sconto: ${c.getSaldoCapo()}$`);
            console.log(`Prezzo finale: ${c.getAcquistoCapo()}$`);
        }
    });
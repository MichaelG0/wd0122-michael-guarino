"use strict";
//ARTIGIANO
//LIBERO PROFESSIONISTA
//COMMERCIANTE
class Lavoratore {
    constructor(cod, ral) {
        this.redditoAnnuoLordo = ral;
        this.codRedd = cod;
    }
    getUtileTasse() {
        return this.redditoAnnuoLordo * this.codRedd / 100;
    }
}
//
class Artigiano extends Lavoratore {
    constructor(cod, ral) {
        super(cod, ral);
        this.tasseINPS = 10;
        this.tasseIRPEF = 23;
        this.tasseINPS;
        this.tasseIRPEF;
    }
    getTasseInps() {
        return this.getUtileTasse() * this.tasseINPS / 100;
    }
    getTasseIrpef() {
        return this.getUtileTasse() * this.tasseIRPEF / 100;
    }
    getRedditoAnnuoNetto() {
        return this.getUtileTasse() - (this.getTasseInps() + this.getTasseIrpef());
    }
}
// 
class LiberoProfessionista extends Lavoratore {
    constructor(cod, ral) {
        super(cod, ral);
        this.tasseINPS = 10;
        this.tasseIRPEF = 25;
        this.tasseINPS;
        this.tasseIRPEF;
    }
    getTasseInps() {
        return this.getUtileTasse() * this.tasseINPS / 100;
    }
    getTasseIrpef() {
        return this.getUtileTasse() * this.tasseIRPEF / 100;
    }
    getRedditoAnnuoNetto() {
        return this.getUtileTasse() - (this.getTasseInps() + this.getTasseIrpef());
    }
}
// 
class Commerciante extends Lavoratore {
    constructor(cod, ral) {
        super(cod, ral);
        this.tasseINPS = 15;
        this.tasseIRPEF = 35;
        this.tasseINPS;
        this.tasseIRPEF;
    }
    getTasseInps() {
        return this.getUtileTasse() * this.tasseINPS / 100;
    }
    getTasseIrpef() {
        return this.getUtileTasse() * this.tasseIRPEF / 100;
    }
    getRedditoAnnuoNetto() {
        return this.getUtileTasse() - (this.getTasseInps() + this.getTasseIrpef());
    }
}
// 
let l1 = new Artigiano(10000, 50);
console.log('utile tasse ARTIGIANO: ' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO: ' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO: ' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO: ' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l2 = new LiberoProfessionista(20000, 80);
console.log('utile tasse LIBERO PROFESSIONISTA: ' + l2.getUtileTasse() + '€');
console.log('tasse inps LIBERO PROFESSIONISTA: ' + l2.getTasseInps() + '€');
console.log('tasse irpef LIBERO PROFESSIONISTA: ' + l2.getTasseIrpef() + '€');
console.log('reddito annuo netto LIBERO PROFESSIONISTA: ' + l2.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l3 = new Commerciante(28000, 70);
console.log('utile tasse COMMERCIANTE: ' + l3.getUtileTasse() + '€');
console.log('tasse inps COMMERCIANTE: ' + l3.getTasseInps() + '€');
console.log('tasse irpef COMMERCIANTE: ' + l3.getTasseIrpef() + '€');
console.log('reddito annuo netto COMMERCIANTE: ' + l3.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
//# sourceMappingURL=app.js.map
//ARTIGIANO
//LIBERO PROFESSIONISTA
//COMMERCIANTE

abstract class Lavoratore {
    protected redditoAnnuoLordo:number
    protected codRedd:number
    protected abstract tasseINPS:number
    protected abstract tasseIRPEF:number
    constructor(cod:number, ral:number){
        this.redditoAnnuoLordo = ral
        this.codRedd = cod
    }

    public getUtileTasse():number{
        return this.redditoAnnuoLordo * this.codRedd / 100
    }

    protected abstract getTasseInps():number
    protected abstract getTasseIrpef():number
    protected abstract getRedditoAnnuoNetto():number
}

//

class Artigiano extends Lavoratore {
    protected tasseINPS:number = 10
    protected tasseIRPEF:number = 23
    constructor(cod:number, ral:number){
        super(cod, ral)
        this.tasseINPS
        this.tasseIRPEF
    }

    public getTasseInps():number{
        return this.getUtileTasse() * this.tasseINPS / 100
    }

    public getTasseIrpef():number{
        return this.getUtileTasse() * this.tasseIRPEF / 100
    }

    public getRedditoAnnuoNetto():number {
        return this.getUtileTasse() - (this.getTasseInps() + this.getTasseIrpef())
    }
}

// 

class LiberoProfessionista extends Lavoratore {
    protected tasseINPS:number = 10
    protected tasseIRPEF:number = 25
    constructor(cod:number, ral:number){
        super(cod, ral)
        this.tasseINPS
        this.tasseIRPEF
    }

    public getTasseInps():number{
        return this.getUtileTasse() * this.tasseINPS / 100
    }

    public getTasseIrpef():number{
        return this.getUtileTasse() * this.tasseIRPEF / 100
    }

    public getRedditoAnnuoNetto():number {
        return this.getUtileTasse() - (this.getTasseInps() + this.getTasseIrpef())
    }
}

// 

class Commerciante extends Lavoratore {
    protected tasseINPS:number = 15
    protected tasseIRPEF:number = 35
    constructor(cod:number, ral:number){
        super(cod, ral)
        this.tasseINPS
        this.tasseIRPEF
    }

    public getTasseInps():number{
        return this.getUtileTasse() * this.tasseINPS / 100
    }

    public getTasseIrpef():number{
        return this.getUtileTasse() * this.tasseIRPEF / 100
    }

    public getRedditoAnnuoNetto():number {
        return this.getUtileTasse() - (this.getTasseInps() + this.getTasseIrpef())
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
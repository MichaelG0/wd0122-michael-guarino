interface ISmartphone{
    credito: number
    nChiamate: number
    ricarica: (eur: number) => void
    chiamata: (min: number) => void
    numero404: () => number
    getNChiamate: () => number
    azzeraChiamate: () => void
}

// CLASSES

class FirstUser implements ISmartphone{
    credito: number
    nChiamate: number

    constructor(){
        this.credito = 0
        this.nChiamate = 0
    }

    public ricarica(eur: number):void{
        this.credito += eur
    }

    public chiamata(min: number):void{
        this.nChiamate += 1
        this.credito = Math.floor((this.credito - min * 0.2) * 100) / 100
    }

    public numero404():number{
        return this.credito
    }
    
    public getNChiamate():number{
        return this.nChiamate
    }

    public azzeraChiamate():void{
        this.nChiamate = 0
    }
}

class SecondUser implements ISmartphone{
    credito: number
    nChiamate: number

    constructor(){
        this.credito = 0
        this.nChiamate = 0
    }

    public ricarica(eur: number):void{
        this.credito += eur
    }

    public chiamata(min: number):void{
        this.nChiamate += 1
        this.credito = Math.floor((this.credito - min * 0.2) * 100) / 100
    }

    public numero404():number{
        return this.credito
    }
    
    public getNChiamate():number{
        return this.nChiamate
    }

    public azzeraChiamate():void{
        this.nChiamate = 0
    }
}

class ThirdUser implements ISmartphone{
    credito: number
    nChiamate: number

    constructor(){
        this.credito = 0
        this.nChiamate = 0
    }

    public ricarica(eur: number):void{
        this.credito += eur
    }

    public chiamata(min: number):void{
        this.nChiamate += 1
        this.credito = Math.floor((this.credito - min * 0.2) * 100) / 100
    }

    public numero404():number{
        return this.credito
    }
    
    public getNChiamate():number{
        return this.nChiamate
    }

    public azzeraChiamate():void{
        this.nChiamate = 0
    }
}

// LOGS

const u1 = new FirstUser
console.log('----- Utente 1 -----');
u1.ricarica(10)
console.log(`Credito residuo: ${u1.numero404()}€`)
u1.chiamata(3)
u1.chiamata(6)
u1.chiamata(5)
console.log(`Chimate effettuate: ${u1.getNChiamate()}`)
console.log(`Credito residuo: ${u1.numero404()}€`)
u1.azzeraChiamate()
console.log(`Chimate effettuate: ${u1.getNChiamate()}`)

const u2 = new SecondUser
console.log('\n----- Utente 2 -----');
u2.ricarica(20)
console.log(`Credito residuo: ${u2.numero404()}€`)
u2.chiamata(5)
u2.chiamata(9)
u2.chiamata(28)
u2.chiamata(15)
u2.chiamata(6)
u2.chiamata(18)
u2.chiamata(7)
console.log(`Chimate effettuate: ${u2.getNChiamate()}`)
console.log(`Credito residuo: ${u2.numero404()}€`)
u2.azzeraChiamate()
console.log(`Chimate effettuate: ${u2.getNChiamate()}`)

const u3 = new ThirdUser
console.log('\n----- Utente 3 -----');
u3.ricarica(50)
console.log(`Credito residuo: ${u3.numero404()}€`)
u3.chiamata(25)
u3.chiamata(13)
u3.chiamata(4)
u3.chiamata(15)
u3.chiamata(7)
u3.chiamata(33)
u3.chiamata(12)
u3.chiamata(4)
u3.chiamata(6)
u3.chiamata(28)
u3.chiamata(7)
u3.chiamata(5)
u3.chiamata(3)
u3.chiamata(34)
u3.chiamata(30)
console.log(`Chimate effettuate: ${u3.getNChiamate()}`)
console.log(`Credito residuo: ${u3.numero404()}€`)
u3.azzeraChiamate()
console.log(`Chimate effettuate: ${u3.getNChiamate()}`)
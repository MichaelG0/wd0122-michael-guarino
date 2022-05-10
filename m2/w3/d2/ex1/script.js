class Person{
    static compareAge(x, y){
        if(x.age == undefined || y.age == undefined){
            document.write('inserisci dei valori validi')
        }else if(x.age == y.age){
            document.write(`${x.nome} e ${y.nome} hanno la stessa età`)
        }else if(x.age > y.age){
            document.write(`${y.nome} è più giovane di ${x.nome}`)
        }else if(x.age < y.age){
            document.write(`${x.nome} è più giovane di ${y.nome}`)
        }
    }
}

let person1 = {
    nome: 'Ugo',
    age: 30
}

let person2 = {
    nome: 'Gianna',
    age: 25
}

Person.compareAge(person1, person2)
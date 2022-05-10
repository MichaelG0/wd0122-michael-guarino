class Pagination {
    constructor(list, nOfPages){
        this.list = list

        this.numberOfPages()
    }
    numberOfPages(){
        let tbody = document.querySelector('tbody')
        for(let person of this.list){
            let row = document.createElement('tr')
            let numberCell = document.createElement('td')
            let nameCell = document.createElement('td')

            numberCell.colSpan = 2
            nameCell.colSpan = 2
            numberCell.innerHTML = person.number
            nameCell.innerHTML = person.nome
            
            row.append(numberCell, nameCell)
            tbody.append(row)
        }
    }
}

let peopleList = [
    {number: 1, nome: 'Giuseppe'},
    {number: 2, nome: 'Maria'},
    {number: 3, nome: 'Giovanni'},
    {number: 4, nome: 'Anna'},
    {number: 5, nome: 'Antonio'},
    {number: 6, nome: 'Rosa'},
    {number: 7, nome: 'Luigi'},
    {number: 8, nome: 'Angela'},
]

new Pagination(peopleList)
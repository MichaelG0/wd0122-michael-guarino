class Pagination {
    constructor(list, elPerPage) {
        this.list = list
        this.elPerPage = elPerPage
        this.elPerPageConst = elPerPage
        this.tbody = document.querySelector('tbody')
        this.i = 0

        for (this.i; this.i < this.elPerPage; this.i++) {
            this.visibleElements()
        }
        this.next = document.querySelector('#next')
        this.next.addEventListener('click', () => this.nextPage())
        this.prev = document.querySelector('#prev')
        this.prev.addEventListener('click', () => this.prevPage())
    }
    visibleElements() {
        let row = document.createElement('tr')
        let numberCell = document.createElement('td')
        let nameCell = document.createElement('td')

        console.log(this.i, this.elPerPage);

        numberCell.colSpan = 2
        nameCell.colSpan = 2
        numberCell.innerHTML = this.list[this.i].number
        nameCell.innerHTML = this.list[this.i].nome

        row.append(numberCell, nameCell)
        this.tbody.append(row)
    }
    nextPage() {
        this.tbody.innerHTML = ''
        this.elPerPage += this.elPerPageConst
        for (this.i; this.i < this.elPerPage; this.i++) {
            this.visibleElements()
        }
    }
    prevPage() {
        this.tbody.innerHTML = ''
        this.elPerPage -= this.elPerPageConst
        for (this.i; this.i > this.elPerPage; this.i--) {
            this.visibleElements()
        }
    }
}

let peopleList = [
    { number: 1, nome: 'Giuseppe' },
    { number: 2, nome: 'Maria' },
    { number: 3, nome: 'Giovanni' },
    { number: 4, nome: 'Anna' },
    { number: 5, nome: 'Antonio' },
    { number: 6, nome: 'Rosa' },
    { number: 7, nome: 'Luigi' },
    { number: 8, nome: 'Angela' },
]

new Pagination(peopleList, 2)
class form{
    constructor(targetHTMLElement){
        this.target = document.querySelector(targetHTMLElement)
        this.createForm()
        this.button.addEventListener('click', () => this.addUser())
    }

    createForm(){
        let inputName = document.createElement('input')
        inputName.type = 'text'
        inputName.placeholder = 'Nome'
        this.name = inputName
        
        let inputSurname = document.createElement('input')
        inputSurname.type = 'text'
        inputSurname.placeholder = 'Cognome'
        this.surname = inputSurname
        
        let button = document.createElement('button')
        button.innerHTML = 'Invio'
        this.button = button
        
        this.target.append(inputName, inputSurname, button)
    }
    
    addUser(){
        let user = document.createElement('p')
        user.innerHTML = this.name.value + ' ' + this.surname.value
        
        this.target.append(user)
    }
}

new form('#form')
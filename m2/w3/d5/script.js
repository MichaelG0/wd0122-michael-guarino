const APPURL = 'users.json'

class Cap{
    static capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
}

let table = document.querySelector('#users')

fetch(APPURL)
    .then(res => res.json())
    .then(res => {
        let displayedFields = ['username', 'firstName', 'lastName', 'gender', 'profileURL', 'email']

        let trH = document.createElement('tr')
        for (field of displayedFields) {
            let th = document.createElement('th')
            th.innerText = Cap.capitalize(field)
            trH.append(th)
        }
        table.append(trH)

        for (let user of res) {
            let tr = document.createElement('tr')
            for (let prop in user) {
                if (displayedFields.includes(prop)) {
                    let td = document.createElement('td')
                    if(prop == 'profileURL'){
                        let img = document.createElement('img')
                        img.src = user[prop]
                        td.append(img)
                    }else{
                        td.innerHTML = user[prop]
                    }
                    tr.append(td)
                }
            }
            table.append(tr)
        }
    })
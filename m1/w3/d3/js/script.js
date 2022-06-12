binaryConversion = decimal => decimal.toString(2);

console.log(binaryConversion(146))

// 

let date = new Date()
let year = date.getFullYear()
console.log(year)

function myFunction(){
    let yearOfBirth = document.querySelector("#data").value
    if (yearOfBirth > year || yearOfBirth < 1900){
        document.querySelector("#age").innerHTML = 'Inserisci un valore valido'
    }else{
        document.querySelector("#age").innerHTML = year - yearOfBirth + ' anni'
    }
}

// 

let mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']

function monthDropdown(pirupiru){
    let option = '<option selected disabled>Mese</option>';
    
    for (let i = 0; i < mesi.length; i++) {
        let monthNumber = (i + 1);
        
        let mese = monthNumber;

        console.log(mese);
        
        option += '<option value=' + mese + '>' + mesi[i] + '</option>';
    }
    document.querySelector(pirupiru).innerHTML = option
}
monthDropdown('#mese')
monthDropdown('#mese2')








function daysDifference(){
    let anno, mese, giorno

    anno = document.querySelector('#anno').value
    mese = document.querySelector('#mese').innerHTML
    giorno = document.querySelector('#giorno').value

    mese = []

    if(isNaN(mese) || mese < 1 || mese > 12){
        document.querySelector('#diff').innerHTML = 'Inserisci un valore valido'
    }else{
        document.querySelector('#diff').innerHTML = 'Mhanz'
    }
    
    let data = new Date(anno, mese, giorno)
    console.log(data)
}
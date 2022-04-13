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
let frase = 'TrentatrĂ© trentini entrarono a Trento, tutti e trentatrĂ© trotterellando.'

let split = frase.split(' ')
console.log(split);

let output = split[Math.floor(Math.random() * split.length)] + ' ' + split[Math.floor(Math.random() * split.length)]
console.log(output);

// 

let persone = ['Marco', 'Luca', 'Giulia', 'Gianna', 'Carmela']
console.log(persone[2]);

let aggiungi = persone.push('Samuele')
console.log(persone);
console.log(persone.length);
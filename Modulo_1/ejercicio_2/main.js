const myName = 'Angelica';
const age = 31;
let ofAge = null;
const address = {
    calle: 'Carrera 73',
    numero: '10d-95',
};
const favouriteColours = [
    'blue',
    'black',
    'aqua',
    'green',
];
const favouriteLanguages = [
    'HTML5',
    'CSS',
    'Javascript',
    'C', 
];
const bestLanguaje = favouriteLanguages[0];
const worstLanguaje = favouriteLanguages[3];

console.log(myName);
console.log(age);
if (age >= 18) {
    ofAge = true
}
else {
    ofAge = false
};
console.log(ofAge);
console.log(address);
console.log(favouriteColours);
console.log(favouriteLanguages);
console.log(bestLanguaje);
console.log(worstLanguaje);
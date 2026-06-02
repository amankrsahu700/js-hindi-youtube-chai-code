const score = 400;
 

const balance = new  Number(700);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));
//console.log(typeof balance)

const otherNumber = 123.8766;

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;

console.log(hundreds.toLocaleString('en-In'));

// ++++++++++++++++ Maths ++++++++++++++++ \\

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.6));

console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));

console.log(Math.min(4, 3, 6, 8, 2));

console.log(Math.max(4, 3, 6, 8, 2));

console.log(Math.floor(Math.random()*10 + 1));

const min = 20
const max = 29

 console.log(Math.floor((Math.random() * (max - min + 1)  + min)));
 

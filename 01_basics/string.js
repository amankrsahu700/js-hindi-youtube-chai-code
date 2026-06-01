const name = "amankrsahu"
const repoCount = 80

//console.log (name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ("The quick brown fox jumps over the lazy dog.");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('n')); 

const newStr = gameName.substring(0, 4);
console.log(newStr);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newstr1 = "   amankrsahuansh   "
console.log(newstr1);
console.log(newstr1.trim());


const url = "https://aman.com/aman%80sahuansh"

console.log(url.replace('%80', '100'));

console.log(url.includes('80sahuansh'))

console.log(gameName.split(" "))
// There are mainly Two types of data types

// 1 -> primitive & 2-> non-primitive 
// primitive types ->  are 7 types 
// string, numbers, boolearn, null, undefined, symbol, bigInt;

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(id === anotherId);

const bigInt = 98745632123654789n



// 2-> non-primitives (Reference)

// Array, objects & functions


const heros = ["shaktiman", "naagraj", "dogra", "aman"]

let myObj = {
    name: "aman",
    age: 23,
    
}

console.log(myObj)

const myFunction = function() {

    console.log("Hello Aman"); 
}

console.log(typeof scoreValue);

console.log(typeof myFunction);

console.log(typeof heros);

/*   Note => to master js study objects & Browser, events js is a dynamic typed language   */

  // javaScript Documentation
// https://tc39.es/ecma262/
// https://javascript.info/
/* The scope of this lecture is to understand that  some times in java script 
the out come become unpredictable 
because of comparision of two different data types */


console.log("2" > 1);
console.log("02">1);

console.log(null>0); // js converted null into zero
console.log(null==0);
console.log(null>=0); // a not predictable outcome

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ******* -  strict check - *******//

// === it check value and datatypes both for become true

console.log("2" === 2);


// Date 

let myDate = new Date()
console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());

let okCreatedDate = new Date("01-15-2001")
console.log(okCreatedDate.toString());
console.log(okCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(okCreatedDate.getTime());
console.log(Math.floor(Date.now()/10000000000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());


`${newDate.getDay}`
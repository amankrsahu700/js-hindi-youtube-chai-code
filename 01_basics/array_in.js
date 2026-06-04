Arrays 

const myArr = [0, 1, 2, 3, 4, 5]

myArr.push(7);
myArr.pop();

let arr = [10, 20, 30, 40, 50,];
let num = 0; 
console.log(arr.includes(20));// true
console.log(arr.indexOf(30));// 2
console.log(arr.lastIndexOf(20));//4
console.log(arr.shift());//10

console.log(arr.reverse());
console.log(arr.sort());

console.log(arr.slice(0,4)); // [20, 30, 40, 20]

console.log(arr.splice(1,2)) 

console.log(myArr.concat(arr));

const aman = ["Aman", "Kumar", "Sahu"];
console.log(aman.join("*"));



let result = (arr.find(num > 20)); // not solved yet 
console.log(result);

// ######## // #######  //
console.log(myArr[2]);
console.log(myArr);

let mixed = ["Aman", 22, true];
mixed.push("@")
mixed[1] = 23;
console.log(mixed);
console.log(mixed.length);

let arr = [1, 2, 3, 4, 5,6,7,10]
for (let i=0; i < arr.length; i++) {
    console.log(arr[i])
}
for (let value of arr) {
    console.log(value);
}

arr.forEach((num) => {
    console.log(num);
});

let arr = [10, 20, 30, 40];

let result = arr.find(num => num > 20);

console.log(result);
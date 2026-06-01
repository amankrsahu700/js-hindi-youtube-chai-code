// stack( primitive), Heap ( non - primitive)

let myYouthName = "amanSahuansh" 

let anotherName = myYouthName;
anotherName = "okAman"

console.log(anotherName);
console.log(myYouthName);

let user1 = {
    email: "user1@gmail.com",
    upi: "user@ybl"
}

let user2 = {
    email: "user2@gmail.com",
    upi: "user2@ybl"
}

 user2 = user1;

user2.email = "aman@google.com" 

console.log(user1.email);
console.log(user2.email);
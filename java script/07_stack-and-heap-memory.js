// Stack (Primitive)
// Heap (Non-Primitive)

let myName = "ayan";

let name = myName;
name = "aditi";

console.log(name);     //aditi
console.log(myName);     //ayan


let userOne = {
    email: "mohd@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email = "ayan@gmail.com";

console.log(userOne.email);     //ayan@gmail.com
console.log(userTwo.email);     //ayan@gmail.com


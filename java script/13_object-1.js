//  object literals

let mySym;

const jsUser = {
    "full name": "Mohd ayan",
    name: "ayan",
    age: 20,
    [mySym]: "key1",                          //to use symbol in object we use this syntax
    location: "allahabad",
    email: "ayan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);     //ayan@gmail.com        (less used syntax)
console.log(jsUser["email"]);     //ayan@gmail.com

console.log(jsUser["full name"]);     //Mohd ayan
console.log(jsUser[mySym]);     //key1


//  to change values of object

jsUser.age = 50;
console.log(jsUser["age"]);     //50
Object.freeze(jsUser);             //  to freeze values

jsUser.age = 100;
console.log(jsUser["age"]);     //50


jsUser.greetings = function() {
    console.log("Hello i am ayan !");
}

console.log(jsUser.greetings);     //[Function (anonymous)]
console.log(jsUser.greetings());     //Hello i am ayan !


jsUser.greetings1 = function() {
    console.log(`Hello my name is ${this["full name"]} `);
    
}

console.log(jsUser.greetings1());     //Hello my name is Mohd ayan

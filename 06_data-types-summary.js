// PRIMITIVE (7 types)
// -> String, Number, Boolean, null, undefined, Symbol, BigInt

let name = "ayan";   //String
const score = 101;   //Number
let isLoggedIn = true;   //Boolean
const outsideTemp = null;   //null
let userEmail;   //undefined
const id = Symbol('123');   //Symbol
let bigNumber = 653786786234758235834n;   //BigInt


// NON-PRIMITIVE
// -> Array, Objects, Functions

const heroes = ["iron man", "thor", "captain america"];   //Array

let myObj = {             //Object
    name: "ayan",
    age: 20
}

const myFunction = function() {               //Function
    console.log("Hello ayan");
}
let score = false;
console.log(typeof score);   //boolean
console.log(typeof (score));   //boolean


let valueInNumber = Number(score);
console.log(typeof valueInNumber);   //number
console.log(valueInNumber);   //0


// "33" -> 33
// "33abc" -> NaN
// true/false -> 1/0


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);   //true
console.log(typeof booleanIsLoggedIn);   //boolean


// 1/0 -> true/false
// "" -> false
// "anything" -> true


let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);   //33
console.log(typeof stringNumber);   //string


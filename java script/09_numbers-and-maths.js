/*   NUMBERS   */

const score = 400;
console.log(score);     //400


const balance = new Number(100);

console.log(balance);     //[Number: 100]

console.log(balance.toString());     //100

console.log(balance.toFixed(2));     //100.00


const otherNumber = 123.765;

console.log(otherNumber.toPrecision(4));     //123.8


const hundreds = 10000000;

console.log(hundreds.toLocaleString());     //1,00,00,000



/*   MATHS   */

console.log(Math);

console.log(Math.abs(-4));     //4
console.log(Math.abs(4));     //4

console.log(Math.round(4.75));     //5

console.log(Math.ceil(4.01));     //5

console.log(Math.floor(4.9));     //4

console.log(Math.min(2, 3, 6, 3, 9, 0));     //0
console.log(Math.max(2, 3, 6, 3, 9, 0));     //9

console.log(Math.random());     //any random value (0-1)
console.log((Math.random() * 10) + 1);     
console.log(Math.floor((Math.random() * 10) + 1));     


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);     //random integers (10-20)
 


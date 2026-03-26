/*   NULLISH COALESCING OPERATOR (??): null undefined   */

let val1;
val1 = 5 ?? 10;
console.log(val1);     //5


let val2;
val2 = null ?? 10;
console.log(val2);     //10


let var3;
var3 = undefined ?? 10;
console.log(var3);     //10


let var4;
var4 = null ?? 10 ?? 20;
console.log(var4);     //10





/*   TERNARY OPERATOR   */

/*
condition ? true : false
*/

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80")



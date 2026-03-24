/*   ARRAY   */

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr[0]);     //0

const heroes = new Array("iron man", "captain america", "spiderman");
console.log(heroes[2]);     //spiderman

// Array Methods

myArr.push(6, 7, 8);     //add items to array
myArr.pop();     //removes last item from array
myArr.unshift(9);     //add items to start of array
myArr.shift();     //remove first item from array

console.log(myArr.includes(9));     //false
console.log(myArr.indexOf(9));     //-1

console.log(myArr);     //[0, 1, 2, 3, 4, 5, 6, 7]


const newArr = myArr.join();
console.log(newArr);     //0,1,2,3,4,5,6,7
console.log(typeof newArr);     //string


// slice , splice

console.log("A ", myArr);     //A  [0, 1, 2, 3, 4, 5, 6, 7]

const myn1 = myArr.slice(1, 3);
console.log(myn1);     //[ 1, 2 ]

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);

console.log("C ", myArr);




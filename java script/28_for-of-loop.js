/*   FOR OF LOOP   */

/*
for (const element of object) {
    
}
*/

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);   
}


const greeting = "goodmorning";

for (const greet of greeting) {
    console.log(`char : ${greet}`);
}



// MAPS

const map = new Map();
map.set('IN', "India");
map.set('USA', "United states of america");
map.set('FR', "France");

console.log(map);

for (const [key, value] of map) {
    console.log(key, '->', value);
}



// const myObject = {
//     game1: "gta",
//     game2: "nfs"
// }

// for (const [key, value] of myObject) {
//     console.log(key, '->', value);
// }


const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(key, '->', myObject[key]);     
}


const programming = ["js", "cpp", "rb", "swift"];

for (const key in programming) {
    console.log(key, '->', programming[key]);
}
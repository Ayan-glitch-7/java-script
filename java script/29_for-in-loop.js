/*   FOR IN   */

/*
for (const key in object) {
     
}
*/


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
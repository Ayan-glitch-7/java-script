/*   WHILE LOOP   */

/*
while (condition) {
    
}
*/


let i = 0;

while (i <= 10) {
    console.log(`value is ${i}`);
    i = i + 2;
}


let myArray = ["ayan", "aditi", "aditya", "aastha"];

let arr = 0;
while (arr < myArray.length) {
    console.log(`name : ${myArray[arr]}`);
    arr++;
    
}




/*   DO-WHILE LOOP   */
 
/*
do {
    
} while (condition);
*/

let score = 1;

do {
    console.log(`Score is ${score}`);   
    score++;
} while (score <= 10);
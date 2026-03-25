// console.log("A");
// console.log("Y");
// console.log("A");
// console.log("N");


function sayMyName() {
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
}
sayMyName();


function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
    
}
addTwoNumbers(3, 4);      //7


function addTwoNumbers1(num1, num2) {
    let result = num1 + num2;
    return result;
}
const result = addTwoNumbers1(5,7);
console.log(result);     //12


function loginUserMessage(username) {
    return `${username} just logged in`
}
console.log(loginUserMessage("Ayan"));      //Ayan just logged in


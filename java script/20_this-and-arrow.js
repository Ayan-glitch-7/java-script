const user = {
    userName: "ayan",
    age: 20, 

    welcomeMessage: function() {
        console.log(`${this.userName} , welcome to the website`);  
        console.log(this);
             
    }
}

user.welcomeMessage();            //ayan , welcome to the website
user.userName = "aditi";
user.welcomeMessage();            //aditi , welcome to the website

console.log(this);



 
// function chai() {
//     console.log(this);
// }
// chai();




/*   ARROW   */

// const chai = () => {
//     let name = "ayan";
//     console.log(this);
// }
// chai();


const addTwoNum = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwoNum(3, 5));           //8



const addTwoNum1 = (num1, num2) => (num1 + num2)
console.log(addTwoNum1(5, 5));          //10


const name1 = () => ({username: "ayan"})
console.log(name1());                   //{ username: 'ayan' }


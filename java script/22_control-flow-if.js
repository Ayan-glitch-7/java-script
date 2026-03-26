/*   IF   */

/* 
if (true) {
    //  if block will be executed
}

if (false) {
    //  if block will not be executed
}
*/

// const isUserLoggedIn = true;

// if(isUserLoggedIn) {
//     console.log("yes");               
// }

//   <, >, <=, >=, ==, !=, ===, !==

if (2 == "2") {
    console.log("executed1");             //will be executed
}

if (2 === "2") {
    console.log("executed2");             //will not be executed
}



const temperature = 49;

if (temperature < 50) {
    console.log("less thsn 50");
} else {
    console.log("greater than 50");
}



const score = 200;

if (score > 100) {
    const power = "fly";
    console.log(`User power : ${power}`);
}


const balance = 1000;

// if (balance >500) console.log("yes1"), console.log("yes2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 999) {
    console.log("less than 999");
} else {
    console.log("less than 1100");
}



const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserLoggedIn && debitCard) {
    console.log("allowed to shop");   
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("logged in");
}
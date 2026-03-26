/*   TRUTHY AND FALSY   */


// falsy values :
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values :
// "0", "false", " ", [], {}, function() {}



const userEmail = "ayan@gmail.com";

if(userEmail) {
    console.log("has user email");
} else {
    console.log("dont have user email"); 
}


const emptyArray = [];

if (emptyArray.length === 0) {
    console.log("Array is empty");   
}


const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");  
}


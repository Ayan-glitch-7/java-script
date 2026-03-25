function calculatePrice(...num1) {
    return num1;
}
console.log(calculatePrice(200, 400, 600));     //[ 200, 400, 600 ]




const user = {
    usename: "ayan",
    price: 99
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.usename} and price is ${anyObject.price}`);     //Username is ayan and price is 99
    
}
handleObject(user);




const myNewArray = [200, 400, 600, 800];

function getSecondValue(getArray) {
    return getArray[1]
}
console.log(getSecondValue(myNewArray));

function one() {
    const userName = "ayan";

    function two() {
        const age = 20;
        console.log(userName);       
    }
    //console.log(age);
    
    two();
}

one();



if (true) {
    const name = "ayan";
    
    if (name === "ayan") {
        const age = 20;
        console.log(name + age);        
    }
    //console.log(age);   
}
//console.log(name);





function addOne(num) {
    return num + 1;
}
console.log(addOne(5));      //6



const addTwo = function(num) {
    return num + 2;
}
console.log(addTwo(5));       //7
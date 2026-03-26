/*   FOR LOOP*/

/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        console.log("5 is best number");      
    }
    console.log(element);   
}


for (let i = 0; i <= 3; i++) {
    console.log(`OUTER LOOP : ${i}`);    
    for (let j = 0; j <= 3; j++) {
        console.log(`INNER LOOP : ${j} and INNER LOOP : ${i}`);
    }
}


for (let i = 1; i <= 10; i++) {  
    console.log(`TABLE OF ${i}`);
    console.log();
    for (let j = 1; j <= 10; j++) {
        console.log(i + ' * ' + j + ' = ' + i*j);
    }
    console.log();
    console.log();
}



let myArray = ["ayan", "aditi", "aditya", "aastha"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);   
}



// break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`value of i is ${i}`);
}


for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`);
}
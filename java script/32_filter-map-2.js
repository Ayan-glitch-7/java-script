const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const ans = myNums.map( (num) => {
    return num + 10;
})

console.log(ans);


const ans1 = myNums.map( (num) => {
    return num * 10;
}).map( (num) => {
    return num + 1;
}).filter( (num) => {
    return num >= 40
})

 console.log(ans1);
 
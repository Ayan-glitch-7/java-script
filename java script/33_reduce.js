const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const myTotal = myNums.reduce( (acc, curr) => {
    console.log(`acc: ${acc} and curr: ${curr}`);   
    return acc + curr;
}, 0)

console.log(myTotal);



const shoopingCart = [
    {
        itemName: "js",
        price: 2999 
    },
    {
        itemName: "java",
        price: 3999 
    },
    {
        itemName: "py",
        price: 1999 
    },
    {
        itemName: "c++",
        price: 2999 
    },
    {
        itemName: "c",
        price: 999 
    }
]

const ans = shoopingCart.reduce( (acc, item) => {
    return acc + item.price
}, 0)

console.log(ans);

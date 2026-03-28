const coding = ["js", "python", "java", "c", "c++", "ruby", "swift"];

const values = coding.forEach( (item) => {
    console.log(item);
    return item;
})
console.log(values);


const myNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


const newNums = myNums.filter( (num) => {
    return num > 5
})
console.log(newNums);            //[ 6, 7, 8, 9 ]


const Nums = [];

myNums.forEach( (num) => {
    if (num > 5) {
        Nums.push(num)
    }
});
console.log(Nums);               //[ 6, 7, 8, 9 ]



const books = [
    {
        title: "book 1",
        genre: "fiction",
        publish: 1981,
        edition: 2004
    },
    {
        title: "book 2",
        genre: "non-fiction",
        publish: 1992,
        edition: 2008
    },
    {
        title: "book 3",
        genre: "history",
        publish: 1999,
        edition: 2007
    },
    {
        title: "book4",
        genre: "non-fiction",
        publish: 1989,
        edition: 2010
    },
    {
        title: "book 5",
        genre: "science",
        publish: 2009,
        edition: 2014
    },
    {
        title: "book 6",
        genre: "fiction",
        publish: 1987,
        edition: 2010
    },
    {
        title: "book 7",
        genre: "history",
        publish: 1986,
        edition: 1996
    },
    {
        title: "book 8",
        genre: "science",
        publish: 2011,
        edition: 2016
    },
    {
        title: "book 9",
        genre: "non-fiction",
        publish: 1981,
        edition: 1989
    }
];


let userBooks = books.filter( (bk) => {return bk.genre === "history"})
console.log(userBooks);

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 &&  bk.genre === "history"
})
console.log(userBooks);

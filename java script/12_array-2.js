const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

marvelHeros.push(dcHeros);
console.log(marvelHeros);     //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvelHeros[3][1]);     //flash


const allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);     //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ] 

 
const allNewHeros = [...marvelHeros, ...dcHeros];
console.log(allNewHeros);     //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const anotherArray = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
const realNewArray = anotherArray.flat(Infinity);
console.log(realNewArray);     //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


console.log(Array.isArray("ayan"));     //false
console.log(Array.from("ayan"));     //[ 'a', 'y', 'a', 'n' ]

console.log(Array.from({name: "ayan"}));     //[]


let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
let score5 = 500;

console.log(Array.of(score1, score2, score3, score4, score5));     //[ 100, 200, 300, 400, 500 ]

const name = "ayan";
const repoCount = 50;

console.log(name + repoCount + "Value");      //ayan50Value

// modern way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);     //Hello my name is ayan and my repo count is 50


const gameName = new String('Ayan');
console.log(gameName);     //[String: 'Ayan']

console.log(gameName[0]);     //A
console.log(gameName.__proto__);    //{}
console.log(gameName.toUpperCase());     //AYAN
console.log(gameName.charAt(3));     //n
console.log(gameName.indexOf('y'));     //1
 
const newString = gameName.substring(0,2);
console.log(newString);     //Ay

const anotherString = gameName.slice(-3,-1);
console.log(anotherString);     //ya

const newString1 = "      ayan       ";
console.log(newString1);     //      ayan      
console.log(newString1.trim());     //ayan


const url = "https://ayan.com/ayan%20mohd";
console.log(url.replace('%20', '-'));     //https://ayan.com/ayan-mohd
console.log(url.includes('sundar'));     //false


const myName = new String('ayan-hc-com');
console.log(myName.split('-'));     //[ 'ayan', 'hc', 'com' ]



/*   FOR EACH LOOP   */
 
/*
array.forEach(element => {
    
});
*/


const coding = ["js", "python", "java", "c", "c++", "ruby", "swift"];

coding.forEach( function (item) {
    console.log(item);  
})

coding.forEach( (item) => {
    console.log(item);
})


function printMe(item) {
    console.log(item);   
}
coding.forEach(printMe)


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);    
})



const myCoding = [
    {
        languageName: "java script",
        languageFileName: ".js"
    },
    {
        languageName: "python",
        languageFileName: ".py"
    },
    {
        languageName: "java",
        languageFileName: ".java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);  
})
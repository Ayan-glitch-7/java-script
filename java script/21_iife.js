/*   Immidiately Invoked Function Expressions (IIFE)   */

function chai() {
    console.log("ayan is logged in"); 
}
chai();                                             //ayan is logged in


(function chai() {
    console.log("ayan is logged in"); 
}());                                                //ayan is logged in


( (name) => {
    console.log(`${name} is logged in`);   
})("aditi");                                                //aditi is logged in
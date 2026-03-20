const accountId = 3476872345;
let accountEmail = "ayan@gmail.com";
var accountPassword = "12345";
accountCity = "allahabad";
let accountState;


console.log(accountId);   //3476872345

/*
prefer not to use var
because of issue in block and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
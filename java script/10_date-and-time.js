/*   DATE   */

let myDate = new Date();
console.log(myDate);     //2026-03-24T14:28:45.252Z

console.log(myDate.toString());     //Tue Mar 24 2026 20:00:58 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString());     //24/3/2026, 8:02:02 pm

console.log(typeof myDate);     //object


let myCreatedDate = new Date(2023, 0, 23, 5, 35, 56);
console.log(myCreatedDate.toLocaleString());     //23/1/2023, 5:35:56 am

let myCreatedDate1 = new Date("2023-01-23");
console.log(myCreatedDate1.toLocaleString());     //23/1/2023, 5:30:00 am


let myTimeStamp = Date.now();
console.log(myTimeStamp);     
console.log(myCreatedDate.getTime());  
console.log(Math.floor(Date.now() / 1000));
   

let newDate = new Date();
console.log(newDate);     //2026-03-24T14:45:51.373Z
console.log(newDate.getFullYear());     //2026
console.log(newDate.getMonth() + 1);     //3
console.log(newDate.getDay());     //2
console.log(newDate.getMinutes());     //17


console.log(newDate.toLocaleString('default', {              //Tuesday
    weekday: "long",
}));





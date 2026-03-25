//   singleton

const tinderUser = new Object();

console.log(tinderUser);     //{}

tinderUser.id = "ayan123";
tinderUser.name = "ayan";
tinderUser.isLoggedIn = false;

console.log(tinderUser);     //{ id: 'ayan123', name: 'ayan', isLoggedIn: false }



const regUser = {
    email: "ayan@gmail.com",
    fullName: {
        userFullName: {
            firstName: "ayan",
            lastName: "Mohd"
        }
    }
}

console.log(regUser.fullName);            //{ userFullName: { firstName: 'ayan', lastName: 'Mohd' } }
console.log(regUser.fullName.userFullName);      //{ firstName: 'ayan', lastName: 'Mohd' }
console.log(regUser.fullName.userFullName.firstName);          //ayan



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2}
console.log(obj3);             //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
 
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);             //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = {...obj1, ...obj2}
console.log(obj5);             //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



const users = [
    {
        id: 1,
        email: "ayan@gmail.com"
    },
    {
        id: 2,
        email: "aditi@gmail.com"
    },
    {
        id: 3,
        email: "shivam@gmail.com"
    },
    {
        id: 4,
        email: "shubh@gmail.com"
    },
    {
        id: 5,
        email: "somu@gmail.com"
    },
]

console.log(users[1].email);       //aditi@gmail.com


console.log(tinderUser);      //{ id: 'ayan123', name: 'ayan', isLoggedIn: false }

console.log(Object.keys(tinderUser));        //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));        //[ 'ayan123', 'ayan', false ]
console.log(Object.entries(tinderUser));       //[ [ 'id', 'ayan123' ], [ 'name', 'ayan' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));     //true

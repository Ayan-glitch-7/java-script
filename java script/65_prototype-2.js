// let myName1 = "ayan      ";
// let myName2 = "aditi     "

// console.log(myName1.truelength);
// console.log(myName2.truelength);



let myHeroes = ["thor", "hulk"];

let myHeroesPowers = {
    thor: "hammer", 
    hulk: "strength",

    getThorPower: function() {
        console.log(`thor power is ${this.thor}`);
    }
}

Object.prototype.ayan = function() {
    console.log(`ayan's power is mind`);
}

Array.prototype.heyAyan = function() {
    console.log(`ayan says hiiiii`);
}

myHeroesPowers.ayan();
myHeroes.ayan();
// myHeroesPowers.heyAyan();


// inheritance :

const user = {
    name: "ayan",
    email: "ayan@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "js assignment",
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user;



// modern syntax :
Object.setPrototypeOf(teachingSupport, teacher);



let anotherUserName = "AYAN      ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUserName.trueLength();
"ayan".trueLength();
"aditi".trueLength();
class user {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME : ${this.username}`);
    }

    static createID() {
        return '123';
    }
}

const ayan = new user("ayan");
// console.log(ayan.createID());

class teacher extends user {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new teacher("iphone", "iphone@gmail.com");
iphone.logMe();
console.log(iphone.createID());
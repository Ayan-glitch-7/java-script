class user {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    
    get password() {
        return `${this._password.toUpperCase()}ayan`;
    }

    set password(value) {
        this._password = value;
    }
}

const ayan = new user("ayan@gmail.com", "abc");
console.log(ayan.password);
console.log(ayan.email);
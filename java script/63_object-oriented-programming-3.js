function User(userName, loginCount, isLoggedIn) {
    // myUserName = userName;
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function() {
        console.log(`Welcome ${this.username}`);     
    }
    return this;
}

const user1 = new User("ayan", 12, true);
const user2 = new User("aditi", 9, false);
console.log(user1.constructor);
console.log(user2);


// fetch('https://something.com').then().catch().finally();

const promise1 = new Promise( (resolve, reject) => {
    // DO AN ASYNC TASK
    // DB CALLS, CRYPTOGRAPHY, NETWORK
    setTimeout( () => {
        console.log("Asyn task is complete");
        resolve();
    }, 1000)
});

promise1.then( () => {
    console.log("Promise consumed");
})



new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log("Async  task 2 is complete");
        resolve();
    }, 1000)
}).then( () => {
    console.log("Asyn 2 resolved");   
})



const promise3 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve( {username: "Ayan", email: "ayan@gmail.com"})
    }, 1000);
})

promise3.then( (user) => {
    console.log(user);    
})



const promise4 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let error = true;
        if (!error) {
            resolve( {username: "Ayan", password: "123"})
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
})

promise4.then( (user) => {
    console.log(user);
    return user.username;
}).then( (username) => {
    console.log(username);
}).catch( (error) => {
    console.log(error); 
}).finally( () => {
    console.log("The promise is either resolved or rejected");
})



const promise5 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let error = true;
        if (!error) {
            resolve( {username: "Aditi", password: "123"})
        } else {
            reject("ERROR: ADITI went wrong");
        }
    }, 1000);
})

async function consumePromise5() {
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise5();


async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("ERROR: ", error);
    }
}
getAllUsers();



fetch('https://jsonplaceholder.typicode.com/users').then( (response) => {
    return response.json();
}).then( (data) => {
    console.log(data);
}).catch( (error) => {
    console.log(error);
})
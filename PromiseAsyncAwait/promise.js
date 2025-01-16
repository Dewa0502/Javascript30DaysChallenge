// Activity 1: Understanding Promises

//Task 1://  Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const promise = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Hi resolved")
    },2000);

});

promise.then(message => console.log(message));


//Task 2:Create a promise that rejects with an error message after a 2-second timeout and handle the error using `.catch()`.

const promise1 = new Promise((_,reject) => {

    setTimeout(() => {
        reject("Error 404")
    }, 2000);

});

promise1.catch(error => console.log(error));

// Activity 2: Chaining Promises

//Task 3:Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

console.log("Task 3 : ");


const fetchData1 = new Promise(resolve => {
    setTimeout(() => resolve("Data 1 fetched"), 1000)
});

const fetchData2 = new Promise(resolve => {
    setTimeout(() => resolve("Data 2 fetched"),1000);
});

const fetchData3 = new Promise(resolve => {
    setTimeout(() => resolve("Data 3 fetched"), 1000);
});

fetchData1
        .then(data => {
            console.log(data);
            return fetchData2;
        })
        .then(data => {
            console.log(data);
            return fetchData3
        })
        .then(data => {
            console.log(data);
        })

// Activity 3: Using Async/Await

//Task 4:Write an async function that waits for a promise to resolve and then logs the resolved value.

console.log("Task 4");

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Async/Await Resolved"), 2000);
})

async function asyncfunc(){
    const result = await promise2;
    console.log(result);
}

asyncfunc();

//Task 5:Write an async function that handles a rejected promise using try-catch and logs the error message.


const promise3 = new Promise((_, reject) => {
    setTimeout(() => reject("Async/Await Rejected"), 2000);
})

async function asyncFunctionWithCatch() {
    try {
        const result = await promise3;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};
asyncFunctionWithCatch();

// Activity 4: Fetching Data from an API

//Task 6:Use the `fetch` API to get data from a public API and log the response data to the console using promises.

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

//Task 7:Use the `fetch` API to get data from a public API and log the response data to the console using async/await.

async function fetchData() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);    
    }

}

fetchData();

// Activity 5: Concurrent Promises

//Task 8:Use `Promise.all` to wait for multiple promises to resolve and then log all their values.

const promiseA = new Promise((resolve) => setTimeout(() => resolve("A"), 1000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("B"), 2000));
const promiseC = new Promise((resolve) => setTimeout(() => resolve("C"), 3000));

Promise.all([promiseA, promiseB, promiseC])
    .then(values => console.log(values))
    .catch(error => console.log(error));

//Task 9:Use `Promise.race` to log the value of the first promise that resolves among multiple promises.

const promiseX = new Promise((resolve) => setTimeout(() => resolve("X"), 1000));
const promiseY = new Promise((resolve) => setTimeout(() => resolve("Y"), 2000));
const promiseZ = new Promise((resolve) => setTimeout(() => resolve("Z"), 3000));

Promise.all([promiseX, promiseY, promiseZ])
    .then(values => console.log(values))
    .catch(error => console.log(error));

// Feature Requests

//Feature Request 1:Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.

//Feature Request 2:Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.

//Feature Request 3:Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.

//Feature Request 4:API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.

//Feature Request 5:Concurrent Promises Script: Write a script that uses `Promise.all` and `Promise.race` to handle multiple promises concurrently and logs the results.
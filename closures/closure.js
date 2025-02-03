// Activity 1: Understanding Closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

    function outerFunction() {
        let outerVariable = "I'm outside";
        return function innerFunction(){
            console.log(outerVariable); 
        }
    }

    const innerFunc1 = outerFunction();
    innerFunc1();
    
// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

    function counter(){
        let count = 0

        return {
            increment : function(){
                count++
            },
            getCount: function(){
                return count;
            }
        }
    }

    const counter1 = counter();
    counter1.increment();
    console.log(counter1.getCount());
    
// Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

    function createId(){
        let lastId = 0;

        return function(){
            lastId++;
            return lastId;
        }
    }

    const generateId = createId();
    console.log(generateId());
    console.log(generateId());
    

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

    function greet(name){
        return function(){
            console.log(`Hello, ${name}`)
        }
    }

    const greetJohn = greet('John');
    greetJohn();


// Activity 3: Closures in Loops

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

    function createFunctionArray() {
        const functions = [];
        for(let i=0; i<5 ; i++){
            functions.push(function(){
                console.log(i);
            });
        }
        return functions;
    }

    const functionArray1 = createFunctionArray();
    functionArray1[0]();
    functionArray1[1]();
    functionArray1[2]();
    functionArray1[3]();
    console.log(functionArray1);
    /*
    //method 2
    const functions = [];

    // Create an array of functions
    for (let i = 0; i < 5; i++) {
        
        functions.push((function(index) {
            return function() {
            console.log(index);
            };
         }
        )(i));
    }

    // Call each function to see the output
    functions.forEach(fn => fn());
    */

// Activity 4: Module Pattern

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

    function itemCollection(){
        let items = [];

    
    }

// Activity 5: Memoization

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

// Task 8: Create a memoized version of a function that calculates the factorial of a number.

// Feature Requests

// Feature Request 1: Basic Closure Script
//Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.

// Feature Request 2: Counter Closure Script
//Create a script that uses a closure to maintain a private counter with increment and get functions.

// Feature Request 3: Unique ID Generator Script
//Write a script that generates unique IDs using a closure to keep track of the last generated ID.

// Feature Request 4: Loop Closure Script
//Create a script that demonstrates closures in loops to ensure functions log the correct index.

// Feature Request 5: Memoization Script
//Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.
// Activity 1: Function Declaration
//Task 1 : Write a function to check if a number is even or odd and log the result to the console.

function isEvenOrOdd(num){
    if(num % 2 === 0){
        console.log("The number is even.");
    }else{
        console.log("the number is odd.");
    }
}
isEvenOrOdd(4);

//Task 2 : Write a function to calculate the square of a number and return the result.

function squareOfNum(num1){
    return num1 * num1;
}

console.log(squareOfNum(4));

// Activity 2: Function Expression
//Task 3 : Write a function expression to find the maximum of two numbers and log the result to the console.

const MaxNumber = function(a , b){
    if(a > b){
        console.log(a);
    }else{
        console.log(b);
    }
}

MaxNumber(4, 5);

//Task 4 : Write a function expression to concatenate two strings and return the result.

const concatStrings = function(str1 , str2){
    return str1 + str2;
}

console.log(concatStrings("Hello ", "World"));

// Activity 3: Arrow Functions
//Task 5 : Write an arrow function to calculate the sum of two numbers and return the result.

const sumOfNum = (num3 , num4) => num3 + num4;

console.log(sumOfNum(4, 5));


//Task 6 : Write an arrow function to check if a string contains a specific character and return a boolean value.

const checkChar = (str3 , char) => str3.includes(char);

console.log(checkChar("Hello World", "o"))

// Activity 4: Function Parameters and Default Values
//Task 7 : Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function productOfNum(num5, num6 = 2){
    return num5 * num6;
}

console.log(productOfNum(6,8));   //output will be 48
console.log(productOfNum(6));     //default value will be 2

//Task 8 : Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet( name , age = 20){
    return `Hello ${name}, you are ${age} years old.`;
}

console.log(greet("John", 29));
console.log(greet("Doe"));

// Activity 5: Higher-Order Functions
//Task 9 : Write a higher-order function that takes a function and a number, and calls the function that many times.

function repeatFunction(func, num){
    for(let i = 0; i < num; i++){
        func();
    }
}

const sayHello = () => console.log("Hello World");

repeatFunction(sayHello, 5);

//Task 10 : Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function applyFunctions(func1, func2, value){
    return func2(func1(value));
}

const addThree = (num) => num + 3;
const multThree = (num) => num * 3;

console.log(applyFunctions(addThree, multThree, 2)); //output will be 15

// Feature Requests
//Even or Odd Function Script - Write a script that includes a function to check if a number is even or odd and logs the result.

function isEvenOrOdd(num){
    if(num % 2 === 0){
        console.log("The number is even.");
    }else{
        console.log("the number is odd.");
    }
}

isEvenOrOdd(18);

//Square Calculation Function Script - Create a script that includes a function to calculate the square of a number and returns the result.

function giveSquare(num1){
    return num1 * num1;
}

console.log(giveSquare(11));

//Concatenation Function Script - Write a script that includes a function expression to concatenate two strings and returns the result.

const giveconcatStrings = function (str1, str2) {
    return str1 + str2;
};

console.log(giveconcatStrings("Good ", "night!")); // Example usage
console.log(giveconcatStrings("Happy ", "coding!"));

//Sum Calculation Arrow Function Script - Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.

const giveSumOfNum = (num3, num4) => num3 + num4;

console.log(giveSumOfNum(5, 6)); // Example usage

//Higher-Order Function Script - Write a script that includes a higher-order function to apply a given function multiple times.

function giveRepeatFunction(func, num) {
    for (let i=0; i<num; i++) {
        func();
    }
}

const printMessage = () => console.log("This Function runs given number of times");

giveRepeatFunction(printMessage, 5); // Example usage
//Task 1 & 2 : Variable declaration

var a = 19;
console.log(a);

let b = "Hello World";
console.log(b);

//Task 3 : constant Declaration

const isloggedin = true;
console.log(isloggedin);

//Task 4 : Data types

let num = 20;        
let str = "Hello";
let isUser = false;
let obj = { name: "john" , age : 20};
let arr = [1,2,3,4,5];
let und = undefined;
let nul = null;
let sym = Symbol("LogIn");
let bigInt = 1234567890123456789012345678901234567890n;
let func = function(){ console.log("Hello World")};
let date = new Date();
let reg = /w3schools/i;
let error = new Error("Error 404");
let promise = new Promise(function(resolve, reject) {
    resolve("Promise Resolved");
});
let set = new Set([1,2,3,4,5]);
let map = new Map([["name","John"],["age",20]]);

console.log(num, typeof num);
console.log(str, typeof str);
console.log(isUser, typeof isUser);
console.log(obj, typeof obj);
console.log(arr, typeof arr);
console.log(und, typeof und);
console.log(nul, typeof nul);
console.log(sym, typeof sym);
console.log(bigInt, typeof bigInt);
console.log(func, typeof func);
console.log(date, typeof date);
console.log(reg, typeof reg);
//console.log(error, typeof error);  typeof error is object
console.log(promise, typeof promise);
console.log(set, typeof set);
console.log(map, typeof map);

//Task 5 : Type Conversion

let reassignvar = "initial value";
console.log(reassignvar);

reassignvar = "final value";
console.log(reassignvar);


//Task 6 : Reassigning a constant

const name1 = "Dewa";

//name1 = "payal"; //Uncaught TypeError: Assignment to constant variable.

//Feature Request 1:
// Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
let number = 42;
let string = "Hello";
let bool = true;
let object2 = { key: "value" };
let arr2 = [1,2,3,4,5];

console.log("value:",number, "type:", typeof num);
console.log("value:",string, "type:", typeof string);
console.log("value:",bool, "type:", typeof bool);
console.log("value:", object2, "type:", typeof object2);
console.log("value:", arr2, "type:", typeof arr2);


// Feature Request 2:
// Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

// Using let
let var3 = 101;
console.log("Initial Value", var3);
var3 = 202;
console.log("Reassigned Value", var3);

// Using const
const var4 = 101;
console.log("Initial Value", var4);
// var4 = 202; // Uncaught TypeError: Assignment to constant variable.
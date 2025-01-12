//Activity 1: Arithmetic Operations
// Task 1

a = 20;
b = 18;

sum = a + b;
console.log("Addition:", sum);

// Task 2

sub = a - b;
console.log("Subtraction:", sub);

// Task 3

mul = a * b;
console.log("Multiplication:", mul);

// Task 4

div  = a/b;
console.log("Division:", div);

// Task 5

mod = a % b;
console.log("Reminder:", mod);

// Activity 2: Assignment Operators
// Task 6 : Use the += operator to add a number to a variable and log the result to the console.

let c = 10;
c += 10;
console.log("Addition Assignment", c);

// Task 7 : Use the -= operator to subtract a number from a variable and log the result to the console.

let d = 20;
d -= 10;
console.log("Subtraction Assignment",d);

// Activity 3: Comparison Operators
// Task 8

let e = 49;
let f = 50;

console.log("Greater than :", e > f);
console.log("Less than :", e < f);

// Task 9

console.log("Greater than or Equal :", e >= f);
console.log("Less than or Equal :", e <= f);

// Task 10

let nul = null;
let und = undefined;

console.log("Null and Undefined :", nul == und);
console.log("Null and undefined with strict equality :", nul === und);

// Task 11

let g = true;
let h = false;

if(g && h) console.log("Both are true");
else console.log("Both are not true");

// Task 12

if (g || h) console.log("Atleast one is true");
else console.log("Both are not false");

// Task 13

if(!h) console.log("Negate Value of h", !h);

// Activity 4: Ternary Operators
// Task 14

(e > f) ? console.log("e is greater") : console.log("f is greater");

// Feature Requests 1:

let i = 110;
let j = 50;

console.log("Addition : ", i+j);
console.log("Subtraction : ", i-j);
console.log("Multiplication : ", i*j);
console.log("Division : ", i/j);
console.log("Reminder : ", i%j);

// Feature Requests 2:

k = 10;
l = 20;
m = 10;

console.log("K Greater than L", k > l);
console.log("K less than L", k < l);
console.log("L Greater than or Equal to M", l >= m);
console.log("K less than or Equal to M", k <= m);
console.log("K is equal to M", k == m);
console.log("K is not equal to M", k != m);

console.log("Logical AND", (k>l) && (k>0) );
console.log("Logical OR", (k<l) || (k>0) );
console.log("Logical NOT", !(k>0) );



// Feature Requests 3:


//(k >= 0) ? console.log("K is Positive") : console.log("K is Negative");

let number = 5;
let result = (number >= 0) ? "Positive":"Negative";
console.log(result);

// Activity 1: For Loop

// Task 1 - Write a program to print numbers from 1 to 10 using a for loop.

console.log("Numbers from 1 to 10");

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Task 2 - Write a program to print the multiplication table of 5 using a for loop.
let num = 5;

console.log("Multiplication Table of 5");

for(let i = 1; i <= 10; i++){
    console.log(`${num} X ${i} = `, num*i);
}

// Activity 2: While Loop

// Task 3 - Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

console.log("Sum of numbers from 1 to 10");

let [i, sum] = [1, 0];

while( i <= 10){
    sum += i;
    i++;
}
console.log("Sum of numbers from 1 to 10 is:", sum);

// Task 4 - Write a program to print numbers from 10 to 1 using a while loop.

console.log("Numbers from 10 to 1");

let j = 10;

while( j > 0){
    console.log(j);
    j--;
}

// Activity 3: Do While Loop

// Task 5 - Write a program to print numbers from 1 to 5 using a do...while loop.

console.log("Numbers from 1 to 5");
let k = 1;

do{
    console.log(k);
    k++;
}while(k <= 5)

// Task 6 - Write a program to calculate the factorial of a number using a do...while loop.

console.log("Factorial of a number");

let fact = 5;
let mult = 1;
do{
    mult = mult * fact;
   fact--;
   }while(fact >= 1);
console.log("Factorial of 5 is:", mult);

// Activity 4: Nested Loops

// Task 7 - Write a program to print a pattern using nested for loops:

/*
    *
    *  *
    *  *  *
    *  *  *  *
    *  *  *  *  *
*/

console.log("Pattern Printing");

for(let i = 1; i <= 5; i++){
    let pattern = "";
    for(let j = 1; j <= i; j++){
        pattern += "* ";
    }
    console.log(pattern);
}

// Activity 5: Loop Control Statements

// Task 8 - Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

console.log("Numbers from 1 to 10, skipping 5");

for(let i = 1; i <= 10; i++){
    if(i ===5 ){
        continue;
    }
    console.log(i);
}
// Task 9 - Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

console.log("Numbers from 1 to 10, stopping at 7");

for (let n=1; n <= 10; n++){
    if(n === 7){
        break;
    }
    console.log(n);
}

// Feature Requests

// Number Printing Script - Write a script that prints numbers from 1 to 10 using a for loop and a while loop.

//using for loop
for(let p = 1; p <= 10; p++){
    console.log(p);
}

//using while loop
let q = 1;

while( q<=10 ){
    console.log(q);
    q++;
}

// Multiplication Table Script - Create a script that prints the multiplication table of 5 using a for loop.

let num1 = 5;
for(let r = 1; r <= 10; r++){
    console.log(`${num1} X ${r}`,num1 * r);
}

// Pattern Printing Script - Write a script that prints a pattern of stars using nested loops.

/*
    * * * * * 
    * * * * 
    * * * 
    * * 
    * 
*/

let row = 5;
for(let s = row; s>=1; s--){
    let starPattern = "";
    for(let t = 1; t <= s; t++){
        starPattern += "*";
    }
    console.log(starPattern);
}

// Sum Calculation Script - Write a script that calculates the sum of numbers from 1 to 10 using a while loop.

let u = 1;
let sum1 = 0;
while(u <= 10){
    sum1 += u;
    u++;
}
// Factorial Calculation Script - Create a script that calculates the factorial of a number using a do...while loop.

let num2 = 5;
let mult1 = 1;
do{
    mult1 = mult1 * num2;
    num2--;
}   
while(num2 >= 1);
console.log("Factorial of 5 is:", mult1);

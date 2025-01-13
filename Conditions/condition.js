// Activity 1 : If-Else Statements

//Tasks 1 : Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let number = -8 ;

if(number > 0){
    console.log("The number is positive");
}else if(number < 0){
    console.log("The number is negative");
}else{
    console.log("The number is zero");
}

// Task 2 : Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 10;

(age >= 18) ? console.log("You are eligible to vote") : console.log("You are not eligible to vote");


// Activity 2: Nested If-Else Statements

// Task 3 : Write a program to find the largest of three numbers using nested if-else statements.
let [a, b, c] = [110, 130, 110];

if( a >= b) {
    if( a >= c ) {
     console.log("a is greater than b and c");
} else console.log (" c is greater than b and c");
} else {
    if( b >= c){
    console.log("b is greater than b and c");
}else console.log (" c is greater than b and c");
}

// Activity 3: Switch Case

// Task 4 : Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 5;

switch(day){
    case 1 : console.log("Monday"); break;
    case 2 : console.log("Tuesday"); break;
    case 3 : console.log("wednesday"); break;
    case 4 : console.log("Thursday"); break;
    case 5 : console.log("Friday"); break;
    case 6 : console.log("Saturday"); break;
    case 7 : console.log("Sunday"); break;
    default : console.log("Invalid Input"); break;
}

// Task 5 : Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
 

let score = 90;

switch(true){

    case score >= 90 : console.log("A");
                       break;  
    case score >= 80 : console.log("B");
                       break;
    case score >= 70 : console.log("C");
                       break;
    case score >= 60 : console.log("D");
                       break;
    default : console.log("F");
}

// Activity 4: Conditional (Ternary) Operator

// Task 6 : Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let num = 10;

(num % 2 == 0) ? console.log("Even") : console.log("Odd");

// Activity 5: Combining Conditions

// Task 7 - Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

// year should be divisible by 4 and not divisible by 100 unless divisible by 400

let year = 2024;

(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? console.log("leap year") : console.log("Not a leap year");

// Feature Requests

// Number Check Script - Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

let numCheck = 1;

if(numCheck > 0){
    console.log("The number is positive"); 
} else if(numCheck < 0){
    console.log("The number is negative");
} else{
    console.log("The number is zero");
}

// Voting Eligibility Script - Create a script to check if a person is eligible to vote based on their age and log the result.

let eligibleAge = 19;

if (eligibleAge >= 18){
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// Day of the Week Script - Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.

let dayOfWeek = 3;

switch(dayOfWeek){

    case 1 : 
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
}

// Grade Assignment Script - Create a script that uses a switch case to assign a grade based on a score and logs the grade.

let studentScore = 75; // Change this value to test different scores

switch (true) {
  case studentScore >= 90:
    console.log("Grade: A");
    break;
  case studentScore >= 80:
    console.log("Grade: B");
    break;
  case studentScore >= 70:
    console.log("Grade: C");
    break;
  case studentScore >= 60:
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
}

// Leap Year Check Script - Write a script that checks if a year is a leap year using multiple conditions and logs the result.

let checkYear = 2020;

if ((checkYear % 4 === 0 && checkYear % 100 !== 0) || checkYear % 400 === 0) {
  console.log(checkYear + " is a leap year.");
}else{
  console.log(checkYear + " is not a leap year.");
}
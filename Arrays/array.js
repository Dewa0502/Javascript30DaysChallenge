// Activity 1: Array Creation and Access

// Task 1 - Create an array of numbers from 1 to 5 and log the array to the console.

const numArray = [1, 2, 3, 4, 5];

console.log("Array of numbers 1 to 5 :", numArray);

// Task 2 - Access the first and last elements of the array and log them to the console.

const firstElement = numArray[0];
const lastElement = numArray[numArray.length - 1];

console.log(`First Element of Array ${numArray} :`, firstElement);
console.log(`Last Element of Array ${numArray} :`, lastElement);

// Activity 2: Array Methods (Basic)

// Task 3 - Use the `push` method to add a new number to the end of the array and log the updated array.

numArray.push(6);

console.log(`Pushed number 6 to array : `, numArray);

// Task 4 - Use the `pop` method to remove the last element from the array and log the updated array.

numArray.pop();

console.log(`Popped last element from array : `, numArray);

// Task 5 - Use the `shift` method to remove the first element from the array and log the updated array.

numArray.shift();

console.log(`Shifted first element from array : `, numArray);

// Task 6 - Use the `unshift` method to add a new number to the beginning of the array and log the updated array.

numArray.unshift(0);

console.log(`Unshifted number 0 to array : `, numArray);

// Activity 3: Array Methods (Intermediate)

// Task 7 - Use the `map` method to create a new array where each number is doubled and log the new array.

const doubleArray = numArray.map( num => num * 2);

console.log("Doubled Array : ", doubleArray);

// Task 8 - Use the `filter` method to create a new array with only even numbers and log the new array.

const evenArray = numArray.filter( num => num % 2 === 0);

console.log("Even Numbers Array : ", evenArray);

// Task 9 - Use the `reduce` method to calculate the sum of all numbers in the array and log the result.

const sumOfArray = numArray.reduce((total, num) => total + num, 0);

console.log("Sum of Array : ", sumOfArray);

// Activity 4: Array Iteration

// Task 10 - Use a `for` loop to iterate over the array and log each element to the console.

for(let i = 0; i < numArray.length; i++){
    console.log(`Element at index ${i} :`, numArray[i]);
}

// Task 11 - Use the `forEach` method to iterate over the array and log each element to the console.

numArray.forEach( (num,index )=> console.log(`Element ${index}:`, num));

// Activity 5: Multi-dimensional Arrays

// Task 12 - Create a two-dimensional array (matrix) and log the entire array to the console.

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Two-dimensional Array (Matrix) : ", matrix);

// Task 13 - Access and log a specific element from the two-dimensional array.

const specificElement = matrix[1][2]; // Accessing element 6
console.log(`Specific element: ${specificElement}`);

// Feature Requests 
// Array Manipulation Script - Write a script that demonstrates the creation of an array, adding and removing elements using **push**, **pop**, **shift**, and **unshift** methods.

const arrayManipulation = () => {
    const arr = [1, 2, 3];
    console.log('Initial array:', arr);

    arr.push(4);
    console.log('After push:', arr);

    arr.pop();
    console.log('After pop:', arr);

    arr.shift();
    console.log('After shift:', arr);

    arr.unshift(0);
    console.log('After unshift:', arr);
};

arrayManipulation();

// Array Transformation Script - Create a script that uses **map**, **filter**, and **reduce** methods to transform and aggregate array data.

const arrayTransformation = () => {
    const arr = [1, 2, 3, 4, 5];

    const doubled = arr.map(num => num * 2);
    console.log('Doubled:', doubled);

    const evens = arr.filter(num => num % 2 === 0);
    console.log('Evens:', evens);

    const sum = arr.reduce((acc, num) => acc + num, 0);
    console.log('Sum:', sum);
};

arrayTransformation();

// Array Iteration Script - Write a script that iterates over an array using both `for` loop and `forEach` method and logs each element.

const arrayIteration = () => {
    const arr = [10, 20, 30, 40, 50];

    //using for loop
    console.log('Using for loop:');
    for(let j=0; j<arr.length; j++){
        console.log(`Element at index ${j} :`, arr[j]);
        
    }

    //using forEach
    console.log('Using forEach:');
    arr.forEach( (num,index )=> console.log(`Element ${index}:`, num));
};

arrayIteration();

// Two-dimensional Array Script - Create a script that demonstrates the creation and manipulation of a two-dimensional array.

const twoDimensionalArray = () => {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    console.log('Matrix:', matrix);

    const specificElement = matrix[1][2]; // Accessing element 6
    console.log('Specific element:', specificElement);

    // Manipulating the matrix
    matrix[0][1] = 10;
    console.log('Updated matrix:', matrix);

};

twoDimensionalArray();
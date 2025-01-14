// Activity 1: Template Literals

// Task 1 - Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

// const title = "Hello, World!";
// const body = "Welcome to template literals in JavaScript.";

// const html = `
//   <div>
//     <h1>${title}</h1>
//     <p>${body}</p>
//   </div>
// `;
// console.log(html);

const name = "John";
const surname = "Doe";
const age = 30;

console.log(`Name: ${name + " "+ surname}, Age: ${age}`);

// Task 2 - Create a multi-line string using template literals and log it to the console.

const multiLine = `This is a multi-line
string created using
template literals.`;

console.log(multiLine);

// Activity 2: Destructuring

// Task 3 - Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numbers = [1, 2, 3, 4, 5];

const [first, second] = numbers;

console.log(`First: ${first}, Second: ${second}`);

// Task 4 - Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
    title: "JavaScript for Beginners",
    author: "John Doe",
    year: 2021,
};
const { title, author } = book;

console.log(`Title: ${title}, Author: ${author}`);


// Activity 3: Spread and Rest Operators

// Task 5 - Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5, 6];

console.log(newArray);

// Task 6 - Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...numbers){
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// Activity 4: Default Parameters

// Task 7 - Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

const multiply = (x, y = 2) => x * y;

console.log(multiply(3, 4));
console.log(multiply(3));

// Activity 5: Enhanced Object Literals

// Task 8 - Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const createPerson = (name, age) => {
    return {
        name,
        age,
        greet(){
            console.log(`Name: ${this.name}, Age: ${this.age}`);
        }
    };
};

const person = createPerson("John Doe", 30);
console.log(person);
person.greet();

// Task 9 - Create an object with computed property names based on variables and log the object to the console.

const propName1 = "firstName"; 
const propName2 = "lastName";
const name1 = "Dewashish" ;
const name2 = "Gope"
const person1 = {
    [propName1] : name1,
    [propName2] : name2,

    welcome(){
        return `Hey It's ${this.firstName} ${this.lastName}`;   
    }
};

console.log(person1);
console.log(person1.welcome());

// Feature Requests

// 1. Template Literals Script - Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.

const userName = "Bob";
const userAge = 25;
const userGreetings = `Hello ${userName}, you are ${userAge} years old.`;

const longString = `This is a long string.
It spans across multiple lines.
Using template literals makes it easy and readable.`;
console.log(longString);

// 2. Destructuring Script - Create a script that uses array and object destructuring to extract values and log them.

//array destructuring
const fruits = ["apple", "banana", "cherry"];
const [fruit1, fruit2] = fruits;

console.log(`Fruit 1: ${fruit1}, Fruit 2: ${fruit2}`);

//object desctructuring
const car= {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
};

const {make, model} = car;

console.log(`Make: ${make}, Model: ${model}`);


// 3. Spread and Rest Operators Script - Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

const addNumbers = (...nums) => nums.reduce((acc, num) => acc + num, 0);
console.log(addNumbers(1, 2, 3, 4, 5));


// 4. Default Parameters Script - Create a script that defines a function with default parameters and logs the results of calling it with different arguments.

const divide = (a, b = 1) => a / b;
console.log(divide(10, 2)); // 5
console.log(divide(10)); // 10

// 5. Enhanced Object Literals Script - Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

const createAnimal = (species, sound) => {
    return {
        species,
        sound,
        makeSound() {
            console.log(`${this.species} says ${this.sound}`);
        }
    };
};
const dog = createAnimal("Dog", "Woof");
console.log(dog);
dog.makeSound();

const dynamicProp = "isMammal";
const animal = {
    name: "Elephant",
    [dynamicProp]: true
};
console.log(animal);
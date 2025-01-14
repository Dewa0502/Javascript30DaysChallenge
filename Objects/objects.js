// Activity 1: Object Creation and Access

// Task 1 - Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book = {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
}

console.log(book);

// Task 2 - Access and log the title and author properties of the book object.

console.log(book.title);
console.log(book.author);

// Activity 2: Object Methods

// Task 3 - Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.getDetails = function(){
    console.log(`Title: ${this.title}, Author: ${this.author}`);
}

book.getDetails();

// Task 4 - Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.updateyear = function(newYear){
    this.year = newYear;
}

book.updateyear(1999);
console.log(book);

// Activity 3: Nested Objects

// Task 5 - Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
    name: 'City Library',
    books: [
        { title: 'The Alchemnist', author: 'Paulo Coelho', year: 1988 },
        { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }
    ],
};

console.log(library);

// Task 6 - Access and log the name of the library and the titles of all the books in the library.

console.log(`Library Name :`,library.name);
library.books.forEach(book => console.log(`Book Title:`,book.title));

// Activity 4: The `this` Keyword
// Task 7 - Add a method to the book object that uses the `this` keyword to return a string with the book's title and year, and log the result of calling this method.

book.getTitleAndYear = function(){
    console.log(`Title : ${this.title}, Year: ${this.year}`);
}

book.getTitleAndYear();

// Activity 5: Object Iteration
// Task 8 - Use a `for...in` loop to iterate over the properties of the book object and log each property and its value.

console.log('Iterating over the book object properties');
for(let key in book){
    console.log(`${key} : ${book[key]}`);
}

// Task 9 - Use `Object.keys` and `Object.values` methods to log all the keys and values of the book object.

console.log('Keys of the book object:', Object.keys(book));
console.log('Values of the book object:', Object.values(book));

// Feature Requests

// 1. Book Object Script - Write a script that creates a book object, adds methods to it, and logs its properties and method results.

const bookFeature = {
    title: 'The Secret',
    author: 'Rhonda Byrne',
    year: 2006,

    getDetails: function(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    },
    updateyear: function(newYear){
        this.year = newYear;
    },
    getTitleAndYear: function(){
        return `Title : ${this.title}, Year: ${this.year}`;
    },
};

console.log('Book Object with Features', bookFeature);
console.log(bookFeature.getDetails());
bookFeature.updateyear(2010);
console.log(bookFeature)
console.log(bookFeature.getTitleAndYear());

// 2. Library Object Script - Create a script that defines a library object containing an array of book objects and logs the library's details.

const libraryFeature = {
    name: "City Library",
    books: [
        { title: "Moby Dick", author: "Herman Melville", year: 1851 },
        { title: "The Odyssey", author: "Homer", year: -800 },
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
    ],
    getLibraryDetails: function() {
        console.log(`Library Name: ${this.name}`);
        this.books.forEach(book => console.log(`Book Title: ${book.title}`));
    }
};

console.log(libraryFeature);
libraryFeature.getLibraryDetails();


// 3. Object Iteration Script - Write a script that demonstrates iterating over an object's properties using `for...in` loop and `Object.keys/Object.values`.

const bookIteration = {
    title: "War and Peace",
    author: "Leo Tolstoy",
    year: 1869
};

console.log('Using for...in loop:');
for (let key in bookIteration) {
    console.log(`${key}: ${bookIteration[key]}`);
}

console.log('Using Object.keys and Object.values:');
console.log(Object.keys(bookIteration));
console.log(Object.values(bookIteration));
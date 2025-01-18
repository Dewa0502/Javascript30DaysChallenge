//Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

const person =  {
    name: 'John Doe',
    age: 18,
    greet(){
        return `Hi, My name is ${this.name} and I am ${this.age} years old`
    }
};

export default person;
// Activity 1: Creating and Exporting Modules

//Task 1: Create a module that exports a function to add two numbers.
//- Import and use this module in another script.

    // import add from './add _sub.js';

    // console.log(add(39, 11));

//Task 2: Create a module that exports an object representing a person with properties and methods.
// - Import and use this module in another script.

    import person from './person.js'

    console.log(person.greet());

// Activity 2: Named and Default Exports

//Task 3: Create a module that exports multiple functions using named exports.
// - Import and use these functions in another script.

    import * as MathOperation from './add _sub.js';

    console.log(MathOperation.add(49, 69));
    console.log(MathOperation.sub(69, 49));
    

//Task 4: Create a module that exports a single function using default export.
//- Import and use this function in another script.

    import multiple from './multiply.js';

    console.log(multiple(11, 11));

// Activity 3: Importing Entire Modules

//Task 5: Create a module that exports multiple constants and functions.
//- Import the entire module as an object in another script and use its properties.

    import * as math from './constants.js';

    console.log(math.PI);
    console.log(math.E);

    console.log(math.square(25));
    console.log(math.cube(5));
    
// Activity 4: Using Third-Party Modules

//Task 6: Install a third-party module (e.g., lodash) using npm.
//- Import and use a function from this module in a script.

    /*
    Lodash is a popular JavaScript utility library that provides functions to simplify working with arrays, objects, strings, numbers, and
    other data types. It is widely used to make coding more efficient and readable by offering reusable functions for common tasks. 
    */

    import _ from 'lodash';

    const numbers = [45, 56, 31, 67];
    const sortedNumbers = _.sortBy(numbers);

    console.log(sortedNumbers);
    
//Task 7: Install a third-party module (e.g., axios) using npm.
// - Import and use this module to make a network request in a script.

    /*
    What is Axios?
    Axios is a popular JavaScript library for making HTTP requests. It is a promise-based HTTP client that works in the browser and Node.js, 
    simplifying the process of interacting with APIs and handling responses. It is widely used due to its ease of use, built-in features, 
    and flexibility.
    */

    import axios from 'axios';

    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });

// Activity 5: Module Bundling (Optional)

//Task 8:- Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file.
//- Write a script to demonstrate the bundling process.

// step 1 : npm init -y 
//          npm install webpack webpack-cli --save-dev

// step 2: create js files exapmle: add_sub.js and index.js

// step 3:  Create a webpack.config.js file in the project root: webpack.config.js:

// step 4 : Add a build script in package.json:
//          npm run build

// step 5 : Create an index.html file in the dist directory to include the bundled JavaScript:
//          Open dist/index.html in your browser to see the console output.
    


// Feature Requests

//Feature Request 1: Basic Module Script
//- Write a script that creates a module exporting a function and imports it in another script.

//Feature Request 2: Named and Default Exports Script
//- Create a script demonstrating both named and default exports and their usage.

//Feature Request 3: Third-Party Module Script
//- Write a script that installs, imports, and uses functions from third-party modules like lodash and axios.

//Feature Request 4: Module Bundling Script
//- Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).
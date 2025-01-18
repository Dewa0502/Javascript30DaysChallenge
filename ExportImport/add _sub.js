//Create a module that exports multiple functions using named exports. Import and use these functions in another script.

//for single item export you need to add default 
export function add(a, b){
    return (a + b);
}

export function sub(a, b){
    return (a - b);
}

//export const add = (a, b) => a + b;
//export const subtract = (a, b) => a - b;
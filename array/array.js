// ARRAY 
// array is a data structure that stores a collection of elements, each identified by an index or key. Arrays are used to store multiple values in a single variable.

// Example 1: 
let fruits = ["apple", "mango", "grapes"];
console.log(fruits[2]);

// Example 2: 
let numbers = [1,2,3,4];
console.log(numbers);

// Example 3: 
let mixed = [1,2,2.3, "string", null, undefined];
console.log(mixed);


// how to check array type 
// array is consider as object in javascript 
console.log(typeof fruits);
// so to check array type used this method 
console.log(Array.isArray(fruits));

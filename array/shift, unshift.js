// ARRAY SHIFT and UNSHIFT

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

// SHIFT
// Removes the first element from an array.
// Returns the removed element.
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is ", removedFruit);

// UNSHIFT 
// Adds one or more elements to the beginning of an array.
// Returns the new length of the array.
fruits.unshift("banana");
console.log(fruits);

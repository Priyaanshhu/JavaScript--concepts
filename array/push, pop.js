// ARRAY PUSH POP

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

// PUSH
// "push" method adds one or more elements to the end of an array.
// It modifies the original array.
// Returns the new length of the array.
fruits.push("banana");
console.log(fruits);

// POP 
// "shift" method removes the first element from an array.
// It modifies the original array.
let poppedFruit = fruits.pop();
console.log(fruits);

// Returns the removed element.
console.log("popped fruits is", poppedFruit);

// every() METHOD

// the "every" method is an array method that tests whether all elements in the array pass a provided testing function. It returns a boolean value indicating whether all elements satisfy the condition.

// Syntax:
// array.every(callback(element, index, array))

// Where:

// - "callback" is a function that tests each element
// - "element" is the current element being processed
// - "index" is the index of the current element
// - "array" is the array being processed

// The "every" method returns:
// - "true" if all elements pass the test
// - "false" if at least one element fails the test

// Example 1:
// aim: check if every number is divisible by 2 or not
const numbers = [2,4,6,9,10];

const ans1 = numbers.every((number)=>number%2===0);
console.log(ans1);


// Example 2:
// aim: check that every price is under 30k or not 
const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 28000},
]

const ans = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans);
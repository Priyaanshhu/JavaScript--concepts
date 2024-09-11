// OPTIONAL CHAINING 

// Optional Chaining (".?") is a syntax feature introduced in ECMAScript 2020 that allows you to access nested properties or methods of an object without throwing an error if the object or any of its properties are null or undefined.

// Optional Chaining is useful for:
// 1. Avoiding null pointer exceptions
// 2. Simplifying code with fewer null checks
// 3. Improving code readability

// Note: Optional Chaining only works with properties and methods, not with array indices or function calls.


const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}

console.log(user?.firstName);
console.log(user?.address?.houseNumber);
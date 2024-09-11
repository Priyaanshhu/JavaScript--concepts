// find() METHOD

// the "find" method is an array method that returns the first element in the array that satisfies a provided testing function. If no element is found, it returns "undefined".
// The "find" method returns the first element that passes the test implemented by the provided function.

// Syntax:
// array.find(callback(element, index, array))

// Where:
// - "callback" is a function that tests each element
// - "element" is the current element being processed
// - "index" is the index of the current element
// - "array" is the array being processed


// Example 1:
const myArray = ["Hello", "catt", "dog", "lion"];

const ans = myArray.find((string)=>string.length===3);
console.log(ans);


// Example 2:
const users = [
    {userId : 1, userName: "monika"},
    {userId : 2, userName: "harsu"},
    {userId : 3, userName: "nitu"},
    {userId : 4, userName: "mohan"},
    {userId : 5, userName: "aaditisha"},
];

const myUser = users.find((user)=>user.userId===3);
console.log(myUser);
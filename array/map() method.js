// map() METHOD

// the "map" method is a array method that creates a new array with the results of calling a provided function on every element in the original array.

// array.map(function(currentValue, index, arr), thisValue)

// Where:
// - "currentValue" is the current element being processed
// - "index" is the index of the current element
// - "arr" is the array being processed
// - "thisValue" is an optional parameter that sets the "this" value for the callback function

// The "map" method returns a new array with the transformed elements, without modifying the original array.

// Example 1:
const numbers = [3,4,6,1,8];

const squareNumber = numbers.map((number, index)=>{
    return index;
});
console.log(squareNumber);

// Example 2:
const users = [
  { firstName: "monika", age: 22 },
  { firstName: "jayesh", age: 20 },
  { firstName: "mishora", age: 23 },
  { firstName: "vedika", age: 21 },
]

const userNames = users.map((user) => {
  return user.firstName;
});
console.log(userNames);
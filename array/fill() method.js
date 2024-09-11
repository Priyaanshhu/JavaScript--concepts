// fill() METHOD

// the "fill" method is an array method that fills all or a portion of an array with a static value.
// The "fill" method modifies the original array and returns it.
// Note: If "start" and "end" are not provided, the entire array will be filled with the specified value.

// Syntax:
// array.fill(value, start, end)

// Where:
// - "value" is the value to fill the array with
// - "start" is the index to start filling from (optional, default is 0)
// - "end" is the index to stop filling at (optional, default is the array's length)


// Example 1:
const myArray1 = new Array(10).fill(0);
console.log(myArray1);


// Example 2:
const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0,2,5);
console.log(myArray);

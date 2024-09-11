// filter() METHOD

// the "filter" method is an array method that creates a new array with all elements that pass the test implemented by the provided function.
// The "filter" method returns a new array with the elements that meet the condition, without modifying the original array.

// Syntax:
// array.filter(function(currentValue, index, arr), thisValue)

// Where:
// - "currentValue" is the current element being processed
// - "index" is the index of the current element
// - "arr" is the array being processed
// - "thisValue" is an optional parameter that sets the "this" value for the callback function

const numbers = [1,3,2,6,4,8];

const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers);

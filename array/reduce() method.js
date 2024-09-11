// reduce() METHOD

// the "reduce" method is an array method that applies a function to each element in the array, reducing it to a single output value.

// Syntax:
// array.reduce(function(accumulator, currentValue, index, arr), initialValue)

// Where:
// - "accumulator" is the accumulated value previously returned in the last invocation of the callback
// - "currentValue" is the current element being processed
// - "index" is the index of the current element
// - "arr" is the array being processed
// - "initialValue" is an optional initial value for the accumulator

// The "reduce" method returns the final accumulated value.

// Example 1: 
const numbers = [1,2,3,4,5,10];

// aim : sum of all the numbers in array 
const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});
console.log(sum);

// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25


// Example 2:
const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0)
console.log(totalAmount);

// total price      currentValue     return 
// 0                {}               12000
// 12000            22000            34000
// 34000            15000            49000
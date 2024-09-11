// some() METHOD

// the "some" method is an array method that tests whether at least one element in the array passes a provided testing function. It returns a boolean value indicating whether at least one element satisfies the condition.

// The some method returns:
// - "true" if at least one element passes the test
// - "false" if no elements pass the test

// Example 1:

const numbers = [3,5,12,9];
// this will check any number which is even
const ans1 = numbers.some((number)=>number%2===0);
console.log(ans1);


// Example 2:

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 95000},
]

const ans = userCart.some((cartItem)=>cartItem.price > 100000);
console.log(ans);
// PROMISE 

// a Promise is a result object that is used to handle asynchronous operations. It represents a value that may not be available yet, but will be resolved at some point in the future.

// A Promise can be in one of three states:
// 1. Pending : Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: Successful operation, promise resolved with a value.
// 3. Rejected: Failed operation, promise rejected with a reason.

// Promises provide a way to handle asynchronous operations in a more manageable way, allowing you to write cleaner and more readable code.

// Benefits of Promises:
// 1. Improved readability: Promises make asynchronous code look synchronous.
// 2. Error handling: Promises provide a built-in error handling mechanism.
// 3. Chaining: Promises can be chained together to handle complex asynchronous operations.

// Common Promise Methods:
// 1. then(): Handles fulfilled promises.
// 2. catch(): Handles rejected promises.
// 3. finally(): Executes regardless of promise outcome.


// Creating a Promise
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

const friedRicePromise = new Promise((resolve, reject) => {
  if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
    resolve({ value: "friedrice" });
  } else {
    reject("could not do it");
  }
})

// using promise
friedRicePromise.then(
  // if promise get resolve
  (myfriedRice) => {
    console.log("let's eat ", myfriedRice);
  }
) // if promise get rejected
.catch(
  (error) => {
    console.log(error)
  })


// "settimeout"  will print later than "promise" because 
// "settimeout" is saved in callback queue and "promise" is save in microtask queue 
// and microtask queue have higher priority than callback queue
setTimeout(() => {
  console.log("hello from setTimeout")
}, 0)

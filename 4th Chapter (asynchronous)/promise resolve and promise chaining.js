// promise.resolve() and promise chaining

// Promise.resolve():
// Promise.resolve() is a static method that returns a resolved Promise with the given value. It's a shortcut for creating a Promise that's already fulfilled.

// Promise Chaining:
// Promise chaining is a technique used to handle complex asynchronous operations by chaining multiple Promises together. Each Promise in the chain depends on the previous one, allowing you to handle the result of each operation before moving on to the next.

// Promise.resolve :

// const myPromise = Promise.resolve(5);
// // then() method always return promise
// Promise.resolve(5).then(value=>{
//   console.log(value);
// })

// Promise chaining :

function myPromise(){
  return new Promise((resolve, reject)=>{
    resolve("amar");
  })
}

myPromise()
  .then((value)=>{
    console.log(value);
    value += "akbar";
    return value
  })
  .then((value) =>{
    console.log(value);
    value += "anthony";
    return value;
  })
  .then(value=>{
    console.log(value);
  })

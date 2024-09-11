// UNDEFINED
let firstName;
console.log(typeof firstName);

// NULL
let myVariable = null;
console.log(myVariable);
// there is an error, bug in javascript that null is consider as object type
console.log(typeof myVariable);
 
// BIGINT
let myNumber = BigInt(12);
// this is also a way to put value as a BigInt
let sameMyNumber = 123n;
console.log(myNumber);
console.log(myNumber+ sameMyNumber);

// this is the maximum number we can insert as integer
console.log(Number.MAX_SAFE_INTEGER);
  
// COMPUTED PROPERTIES 

// A property in an object whose value is determined by a function or expression, and is recalculated every time it's accessed, allowing for dynamic and flexible property values.

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// Task : To compute this value in a single object like: 
// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

// Method 1 :
// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// Methos 2 :
const obj = {};

obj[key1] = value1;
obj[key2] = value2;
console.log(obj);


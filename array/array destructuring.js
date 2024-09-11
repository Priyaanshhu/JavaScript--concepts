// ARRAY DESTRUCTURINNG 

// A syntax feature that allows you to unpack values from an array and assign them to separate variables in a single statement.

const myArray = ["value1", "value2", "value3", "value4"];

let [myvar1, ,myvar2] = myArray; 
 
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);

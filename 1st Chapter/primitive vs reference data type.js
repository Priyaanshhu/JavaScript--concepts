// PRIMITIVE vs REFERENCE Data Type

// PRIMITVE DATA TYPE :
// Stored in the Stack (a region of memory)
// Hold a single value
// Have a fixed size
// Are passed by value (copied when assigned to a new variable)
// Include: Number, String, Boolean, Null, Undefined, Symbol

let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;
console.log("after incrementing num1")
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);


// REFERENCE DATA TYPE :
// Stored in the Heap (a region of memory)
// Hold a reference to a value (an  address in memory)
// Can have a dynamic size
// Are passed by reference (the same memory address is shared)
// Include: Objects, Arrays, Functions

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);
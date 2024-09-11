// SETS

// a "Set" is a collection of unique values, without duplicates. It's an iterable object that stores values, and provides methods for adding, removing, and checking for values.
// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)

// Key features of Sets:

// 1. Unique values: No duplicates allowed.
// 2. Iterable: Can be iterated over using "for...of" loops.
// 3. Ordered: Values are stored in the order they were added.

// Common methods of Sets:

// 1. "add(value)": Adds a value to the set.
// 2. "delete(value)": Removes a value from the set.
// 3. "has(value)": Checks if a value is in the set.
// 4. "clear()": Removes all values from the set.
// 5. "size": Returns the number of values in the set.


// Example 1:
const items = ['item1', 'item2', 'item3'];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(items);

if(numbers.has(1)){
    console.log("1 is present")
}else{
    console.log("1 is not present")
}
for(let number of numbers){
    console.log(number);
}

// Example 2:
const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
let length = 0;
for(let element of uniqueElements){
    length++;
}

console.log(length);
// splice() METHOD

// the "splice" method is an array method that adds, removes, or replaces elements in an array.

// Syntax:
// array.splice(start, deleteCount, insert)

// Where:
// "start" is the index to start the splice operation from
// "deleteCount" is the number of elements to remove (optional, default is 0)
// "insert" are the elements to add (optional)

// Note :
// - If "deleteCount" is 0, no elements are removed.
// - If "deleteCount" is greater than the number of elements from "start" to the end of the array, all elements from "start" to the end are removed.
// - "splice" modifies the original array and returns an array containing the removed elements (if any).


// Example :
const myArray = ['item1', 'item2', 'item3'];

const deletedItem1 = myArray.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem1);
console.log(myArray);
// ITERABLE, ARRAY LIKE OBJECT 

// Iterable :

// An iterable is an object that can be iterated over in a loop, such as a "for...of" loop. Iterables have a "Symbol.iterator" property that returns an iterator object. Examples of iterables include:
// - Arrays
// - Strings
// - Maps
// - Sets

// Example 1:
const firstName = "monika";
for(let char of firstName){
    console.log(char);
}

// Example 2:
const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item);
}


// Array-like object :

// An array-like object is an object that has a length property and indexed elements, but is not an array. Examples of array-like objects include:
// which have length property and we can access them by index 
// example :- string 

const secondName = "harsh bro";
console.log(secondName.length);
console.log(secondName[2]);
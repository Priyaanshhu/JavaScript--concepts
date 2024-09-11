// MAPS

// a "Map" is a data structure that stores key-value pairs, where each key is unique and maps to a specific value. It"s an iterable object that provides methods for adding, removing, and accessing values.
// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects


// Key features of Maps:
// Key-value pairs : Stores data in key-value pairs.
// Unique keys : No duplicate keys allowed.
// Iterable : Can be iterated over using "for...of" loops.
// Ordered : Values are stored in the order they were added.


// different between maps and objects :
// objects can only have string or symbol
// as key 
// in maps you can use anything as key
// like array, number, string 


const person1 = {
  id: 1,
  firstName: "mohan"
}
const person2 = {
  id: 2,
  firstName: "monika"
}

const extraInfo = new Map();
extraInfo.set(person1, { age: 21, gender: "male" });
extraInfo.set(person2, { age: 25, gender: "female" });

console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);

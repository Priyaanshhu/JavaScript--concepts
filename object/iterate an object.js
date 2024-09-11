// ITERATE AN OBJECT

// To loop through the properties of an object, accessing each key-value pair in a sequential manner, allowing you to perform actions on or with the data.
// In other words, iterating an object means going through each property (key-value pair) of the object one by one, so you can work with the data.

const person = {
  name: "monika",
  age: 21,
  "person hobbies": ["eating", "sleeping", "drawing"]
}

// for in loop 
for(let key in person){
    console.log(`${key} : ${person[key]}`);
}

// for of loop 
for(let key of Object.keys(person)){
    console.log(person[key]);
}
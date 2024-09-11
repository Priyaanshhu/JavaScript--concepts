// DIFFERENCE BETWEEN DOT AND BRACKET NOTATION

const person = {
    name: "monika",
    age: 21,
    // in object key are string so when we have to write name of key giving space like (person hobbies) then we use "" to write key  
    "person hobbies": ["drawing", "sleeping", "eating"]
}
console.log(person["person hobbies"]);

// when we have to put a key(written outside of object) in object then we use [] and perform task like this:

const key = "email";
person[key] = "abc@gmail.com";
console.log(person);

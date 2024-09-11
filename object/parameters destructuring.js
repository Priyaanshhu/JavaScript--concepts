// PARAMETERS DESTRUCTURING 

// parameter destructuring is a feature that allows you to extract values from an array or an object and assign them to variables as function parameters.

const person = {
    firstName: "monika",
    gender: "female",
    age: 22
}

function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);
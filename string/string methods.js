// STRING METHODS
// String is immutable so when we use any method then we have to put that string into new variable

let firstName = "   monika    ";
console.log(firstName.length);

// trim() 
firstName = firstName.trim();
console.log(firstName)
console.log(firstName.length);

// toUpperCase()
let fruitName = "pomeGRanate"

fruitName = fruitName.toUpperCase();
console.log(fruitName);

// toLowerCase()
fruitName = fruitName.toLowerCase();
console.log(fruitName);

// slice()
// start index 
// end index
let newString = fruitName.slice(1, 4);
console.log(newString);
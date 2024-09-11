// BLOCK SCOPE and FUNCTION SCOPE 

// Block scope :
// The scope of a variable declared inside a block of code (such as an if statement, loop, or try-catch block), where the variable is only accessible within that block and not outside of it.
// let and const are block scope

{
  let firstName = "monika"
}
// console.log(firstName); // this will trough an error


// Function scope :
// The scope of a variable declared inside a function, where the variable is only accessible within that function and not outside of it, unless explicitly returned or exposed.
// var is function scope 

{
  var lastName = "roy"
}
console.log(lastName);
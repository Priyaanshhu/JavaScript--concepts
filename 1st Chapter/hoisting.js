// HOISTING

// A JavaScript mechanism that moves the declaration of variables and functions to the top of their scope, regardless of where they are actually defined, allowing them to be accessed before they are declared.
// In other words, hoisting makes it possible to use a variable or function before it is declared, as if it was declared at the top of the scope. This can lead to unexpected behavior if not understood properly.

// Function : if we use "function declaration" to declare a function then it can be accessed before declaring them. but it will not happen in "function expression" and "arrow function" 
hello();
function hello(){
    console.log("i'm a function");
}

// same goes to "var" but it will show undefined except value
// if we use "const" or "let" then it will through an error
console.log(var1);
var var1 = "hello world";

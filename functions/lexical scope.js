// LEXICAL SCOPE 

// The scope of a variable or function that is determined by its physical location within the source code, where variables and functions are resolved based on their nesting and proximity to the current execution context.
// In other words, lexical scope refers to the idea that the scope of a variable or function is determined by its position in the code, and that it has access to the variables and functions in its surrounding scope, but not vice versa. This is also known as static scope.
// basically like, if i made a funtion and the var value is define ouside of funtion then after calling the function that variable will access that value even if it outside of a function :

const myVar = "value1";

// main funtion 
function myApp() {

  // function 1:
  function myFunc() {
    // function inside funtion 1:
    const myFunc2 = () => {
      console.log("inside myFunc", myVar);
    }
    myFunc2();
  }

  console.log(myVar);
  myFunc();
}

myApp();
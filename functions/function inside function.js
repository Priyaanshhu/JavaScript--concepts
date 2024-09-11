// FUNCTION INSIDE FUNCTION (NESTED FUNCTION)

// A function that is defined within another function, allowing it to access the outer function's scope and variables, and creating a new scope for the inner function.
// In other words, a function inside a function is a function that is nested within another function, and has access to the outer function's variables and scope, while also having its own separate scope.

// main function: 
function app() {
  // function 1 :
  const myFunc = () => {
    console.log("hello from myFunc")
  }

  // function 2 :
  const addTwo = (num1, num2) => {
    return num1 + num2;
  }
  
  // function 3 :
  const mul = (num1, num2) => num1 * num2;

  console.log("inside app");
  myFunc();
  console.log(addTwo(2, 3));
  console.log(mul(2, 3));
}
app();
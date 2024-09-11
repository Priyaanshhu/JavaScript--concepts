// ARROW FUNCTION 

// A concise way to write a function expression, using an arrow (=>) to separate the function parameters from the function body, providing a shorter and more readable syntax for defining small, single-statement functions.

// Example 1 :
const singHappyBirthday = () => {
  console.log("happy birthday to you ......");
}
singHappyBirthday();

// Example 2 :
const sumThreeNumbers = (number1, number2, number3) => {
  return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2, 3, 4);
console.log(ans);

// EXample 3 :
// if we have only one parameter and one return value then we can also use this shorthand method :
const isEven = number => number % 2 === 0;
console.log(isEven(4));

// Example 4 :
const firstChar = anyString => anyString[0];
console.log(firstChar("monika"));

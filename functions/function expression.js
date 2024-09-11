// FUNCTION EXPRESSION

// A function that is defined as an expression, typically assigned to a variable, and can be anonymous (without a name) or named, allowing for more flexibility and dynamic creation of functions.

// Example 1 :
const singHappyBirthday = function() {
  console.log("happy birthday to you ......");
}
singHappyBirthday();

// Example 2 :
const sumThreeNumbers = function(number1, number2, number3) {
  return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2, 3, 4);
console.log(ans);

// Example 3 :
const isEven = function(number) {
  return number % 2 === 0;
}
console.log(isEven(2));

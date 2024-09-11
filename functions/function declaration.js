// FUNCTION 

// A block of code that can be executed multiple times with different inputs, performing a specific task or set of tasks, and optionally returning a value.
// In other words, a function is the actual code that performs a task, while a function declaration is the statement that defines and names the function, making it available for use.

// Example 1 :
function singHappyBirthday() {
  console.log("happy birthday to you ......");
}
singHappyBirthday();

// Example 2 :
function sumThreeNumbers(number1, number2, number3) {
  return number1 + number2 + number3;
}
console.log(sumThreeNumbers(5,6,8));

// Example 3 :
function isEven(number){
    return number % 2 === 0;
}
console.log(isEven(4));

// Example 4 :
// input : array, target (number)
// output: index of target if target present in array 

function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
const myArray = [1, 3, 8, 90]
const ans = findTarget(myArray, 8);
console.log(ans);
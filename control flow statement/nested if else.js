// NESTED IF ELSE

// nested if else means using if else condition in if or else satement. lets understand this by an game :
// user have to guess a number and winning number is 19 
// if user guess winning number then print - 19 your guess is right 
// if less than 19 then - 17 too low 
//if more than 19 then - 20 too high 


let winningNumber = 19;
// 'prompt' is used to take input from user. prompt always take input as string
let userGuess = +prompt("Guess a number between 15 - 22 :");

if (userGuess === winningNumber) {
  console.log("Your guess is right!!");
} else {
  // nested if else
  if (userGuess < winningNumber) {
    console.log("too low !!!");
  } else {
    console.log("too high !!!");
  }
}
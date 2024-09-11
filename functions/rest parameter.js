// REST PARAMETERS 

// rest parameters are a way to represent an indefinite number of arguments as an array in a function. They allow a function to accept a variable number of arguments, which can then be accessed and manipulated as an array.
// Rest parameters are denoted by three dots ("...") followed by a parameter name. They must be the last parameter in a function signature.
// Rest parameters are useful when you want to write a function that can handle a variable number of arguments, such as a function that calculates the sum of an unknown number of numbers.

// Example 1 :
function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is`, c);
 }

myFunc(3,4,5,6,7,8,9);


// Example 2 :
function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(4,5,4,2,10);
console.log(ans);
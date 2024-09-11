// FUNCTION RETURNING FUNCTION 

// a function returning a function is a higher-order function that returns another function as its output. In other words, it's a function that creates and returns a new function, which can then be called and executed separately.
// This is also known as a "function factory" or "function closure".

function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}

const ans = myFunc();
console.log(ans());
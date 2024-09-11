// APPLY, CALL, BIND METHOD

// "apply", "call", and "bind" are methods that allow you to manipulate the context () and arguments of a function.


// Apply:
// func.apply(context, argsArray)

// - Sets the context () of the function to the specified "context" object.
// - Passes the arguments in the "argsArray" array to the function.
// - Returns the result of the function call.

// Call:
// func.call(context, arg1, arg2, ...)
// - Sets the context ("this") of the function to the specified "context" object.
// - Passes the individual arguments ("arg1", "arg2", etc.) to the function.
// - Returns the result of the function call.

// Bind:
// func.bind(context, arg1, arg2, ...)
// - Returns a new function with the specified "context" object bound to it.
// - Optionally, passes the individual arguments ("arg1", "arg2", etc.) to the new function.
// - The new function can be called later with additional arguments.


// Difference between Apply and Call:
// - "apply" takes an array of arguments ("argsArray"), while "call" takes individual arguments ("arg1", "arg2", etc.).
// - "apply" is useful when you have an array of arguments and want to pass them to a function.
// - "call" is useful when you have individual arguments and want to pass them to a function.


function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "monika",
    age: 21,   
}
const user2 = {
    firstName : "mahesh",
    age: 22,
    
}
// call
 about.call(user1, "guitar", "bach");

// apply
 about.apply(user1, ["guitar", "bach"]);
 
// bind
 const func = about.bind(user2, "guitar", "bach");
func();

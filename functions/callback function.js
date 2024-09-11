// CALLBACK FUNCTION 

// a callback function is a function that is passed as an argument to another function, and is executed by that function. In other words, it's a function that is called back by another function.

function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there I am a func and I can..")
    callback("monika");
}

myFunc(myFunc2);
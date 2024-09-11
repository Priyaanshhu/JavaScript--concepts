// THIS KEYWORD 

function myFunc(){
    console.log(this);
}
myFunc();

// When you run this code, it will output the global object (usually the "window" object in browsers or the "global" object in Node.js) to the console.

// same output you'll get if you use 
// console.log(window);

// note: if you're using 'this' in function or somewhere and don't want to print 'windows' property then write ( "use strict"; ) on the top of the javascript file 
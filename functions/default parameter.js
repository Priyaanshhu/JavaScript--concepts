// DEFAULT PARAMETERS 

// default parameters are values that are assigned to function parameters if no value is passed when the function is called. They allow developers to specify a default value for a parameter, which will be used if a value is not provided when the function is invoked.

// without default parameters
// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }


// with Default parameters 
function addTwo(a,b=0){
    return a+b;
}

const ans = addTwo(4, 8);
console.log(ans);

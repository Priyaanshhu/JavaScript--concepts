// forEach() METHOD 

// the "forEach" method is a loop that iterates over an array's elements, executing a provided function for each element. It allows you to perform an action on each item in the array without having to use a traditional "for" loop.

// Example 1 :
const numbers = [4,2,5,8];

numbers.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`);
});


// Example 2 :
const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

users.forEach((user, index)=>{
    console.log(user.firstName, index);
})


// ITERATE ELEMENTS 

//"iterating elements" means looping through a collection of elements, such as an array, NodeList, or HTMLCollection, and executing a block of code for each element in the collection.

// In other words, iteration involves:
// - Looping through each element in a collection
// - Executing a block of code for each element
// - Processing or manipulating each element individually

// In HTMLCollection we can just use 'for loop', 'for of loop' but not 'forEach loop'

// array like object have --> indexing, length property 
let navItems = document.getElementsByTagName("a"); // HTMLCollection
console.log(navItems);

// by simple for loop :
// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// by for of loop : 
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// by forEach loop :
// we can't use forEach method to iterate through HTMLCollection
// to work "forEach" we need to convert array like object into array so for that:
navItems = Array.from(navItems);
console.log(Array.isArray(navItems));
navItems.forEach((navItem)=>{
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
})


// In NodeList we can use this loop 'for loop', 'for of loop', 'forEach loop'

// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]);

// let navItems = document.querySelectorAll("a");
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));

// for loop :
// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// for of loop
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// forEach loop
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
// console.log(navItems);
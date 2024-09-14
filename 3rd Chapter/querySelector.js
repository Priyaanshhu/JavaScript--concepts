// querySelector() and querySelectorAll()

// "querySelector" and "querySelectorAll" are methods that allow you to select HTML elements using CSS selectors.

// querySelector :
// - Returns the first element that matches the specified CSS selector.
// - If no element is found, it returns "null".

const mainHeading = document.getElementById("main-heading");
//const mainHeading = document.querySelector("#main-heading");
const header = document.querySelector(".header");
console.log(mainHeading);
console.log(header);


// querySelectorAll :
// - Returns a NodeList (a collection of elements) that matches the specified CSS selector.
// - If no elements are found, it returns an empty NodeList.

const navItem = document.querySelectorAll(".nav-item")
console.log(navItem);
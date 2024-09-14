// GET AND SET ATTRIBUTE 

// 'setAttribute' and 'getAttribute' are methods used to manipulate the attributes of an HTML element.

// getAttribute(name) :
// - Returns the value of a specified attribute on an element.
// - If the attribute doesn't exist, it returns 'null' or an empty string ("").

// Example 1:
const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));

// Example 2:
const link = document.querySelector("a");
console.log(link.getAttribute("href"));

// if we just want output: home
console.log(link.getAttribute("href").slice(1));


// setAttribute(name, value) :
// - Sets the value of a specified attribute on an element.
// - If the attribute doesn't exist, it's created.
// - If the attribute already exists, its value is updated.

link.setAttribute("href", "https://google.com");
console.log(link.getAttribute("href"));

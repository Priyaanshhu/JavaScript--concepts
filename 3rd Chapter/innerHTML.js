// innerHTML

// "innerHTML" is a property that allows you to get or set the HTML content of an element.

// Getting "innerHTML":
// - Returns the HTML content of an element as a string.
// - Includes all child elements, text, and attributes.

// Setting "innerHTML":
// - Replaces the HTML content of an element with a new string.
// - Can be used to add, remove, or modify HTML elements and their content.

// Common use cases:
// - Dynamically updating HTML content
// - Injecting HTML templates
// - Creating dynamic UI components
// - Modifying existing HTML elements

const headline = document.querySelector(".headline");
console.log(headline.innerHTML);

headline.innerHTML = "<h1>Inner html changed </h1>";
headline.innerHTML += "<button class= \"btn\"> Learn More </button>" 
console.log(headline.innerHTML);

// note: Don't use innerHTML to add new elements in page it maybe create performance issues, use it when you want to change existing HTML element

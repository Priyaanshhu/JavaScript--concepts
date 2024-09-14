// STYLE

// the "style" property is used to access and manipulate the CSS styles of an HTML element.
// "style" property returns a CSSStyleDeclaration object, which contains a list of CSS properties and their values.

// Common use cases:
// - Dynamically changing element styles in response to user interactions
// - Animating element styles using JavaScript
// - Adding or removing CSS classes to change element appearance
// - Getting the current style values of an element for debugging or calculation purposes


const mainHeading = document.querySelector("div.headline h2");
console.log(mainHeading.style);

// change the styles of element
mainHeading.style.backgroundColor = "blue";
mainHeading.style.border = "10px solid green";

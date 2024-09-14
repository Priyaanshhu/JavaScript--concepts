// querySelectorAll and getElementsByClassName

// Key differences:
// - "getElementsByClassName" only searches by class name, while "querySelectorAll" allows more complex selectors.
// - "getElementsByClassName" returns a live HTMLCollection, while "querySelectorAll" returns a static NodeList.
// Note: "getElementsByClassName" is supported in older browsers, while "querySelectorAll" is supported in modern browsers.


// getElementsByClassName(className):
// - Returns a live HTMLCollection of elements that have the specified class name.
// - The collection is updated automatically when the document changes.
// - If no elements are found, it returns an empty HTMLCollection.
const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection
console.log(navItems);
console.log(Array.isArray(navItems));


// querySelectorAll(selector):
// - Returns a static NodeList of elements that match the specified CSS selector.
// - The selector can include class names, IDs, tag names, attributes, and more.
// - If no elements are found, it returns an empty NodeList.
const navItems2 = document.querySelectorAll(".nav-item"); // NodeList
console.log(navItems2[1]);

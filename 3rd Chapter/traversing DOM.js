// TRAVERSING DOM

// DOM (Document Object Model) traversing refers to the process of navigating and accessing elements in the HTML document's structure.

// DOM traversing allows you to:
// - Move up and down the DOM tree (parent-child relationships)
// - Move sideways (sibling relationships)
// - Access specific elements or nodes

// Common DOM traversing methods:
// 1. "parentNode" - access the parent element
// 2. "childNodes" - access child elements
// 3. "firstChild" - access the first child element
// 4. "lastChild" - access the last child element
// 5. "nextSibling" - access the next sibling element
// 6. "previousSibling" - access the previous sibling element
// 7. "closest()" - access the closest ancestor element matching a selector
// 8. "querySelector()" - access elements matching a CSS selector

// DOM traversing is useful for:
// - Dynamic element manipulation
// - Event delegation
// - DOM manipulation libraries (e.g., jQuery)
// - Understanding the DOM structure

// getting root node of document
const rootNode = document.getRootNode();
// getting child of root node
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode.childNodes); //output : NodeList(3).[head, text, body];


// getting child node of head element
// position 0:
const headElementNode = htmlElementNode.childNodes[0];
// position 2:
const textNode1 = htmlElementNode.childNodes[1];
// position 2:
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(headElementNode.childNodes);


// sibling relation :
// finding h1 in document 
// const h1 = document.querySelector("h1");
// // parent node of parent node of h1
// const body = h1.parentNode.parentNode;
// console.log(body)
// // changing thier property 
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"

// changing body property of document 
const body = document.body
body.style.color = "#efefef";
body.style.backgroundColor = "#333"

// head in document 
const head = document.querySelector("head");
// console.log(head);

// title in head
const title = head.querySelector("title");
console.log(title.childNodes);

// all children of .container 
const container = document.querySelector(".container");
console.log(container.children);

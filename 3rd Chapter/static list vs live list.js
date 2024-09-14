// STATIC LIST vs LIVE LIST 

// when working with collections of HTML elements, you may encounter two types of lists: static lists and live lists.

// Static List :
// A static list is a collection of elements that is created at a specific point in time and does not update automatically when the underlying document changes. It's like a snapshot of the elements at a particular moment.
// Example: document.querySelectorAll('.my-class')

// Live List
// A live list, on the other hand, is a collection of elements that updates automatically when the underlying document changes. It's like a dynamic view of the elements that reflects any changes to the document.
// Example: document.getElementsByClassName('my-class')

// Key differences:
// - Static lists:
//     - Created at a specific point in time
//     - Does not update automatically
//     - Can be iterated over like an array
// - Live lists:
//     - Updates automatically when the document changes
//     - Reflects changes to the document in real-time
//     - Can be iterated over like a collection, but may change during iteration

// When to use each:
// - Static lists: When you need a one-time snapshot of elements, and don't need to worry about changes to the document.
// - Live lists: When you need to respond to changes in the document, or need to keep your collection up-to-date in real-time.

// Static list
const listItems = document.querySelectorAll(".todo-list li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
const ul = document.querySelector(".todo-list");
ul.append(sixthLi);
console.log(listItems);

// Live list
// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName("li");

// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";

// ul.append(sixthLi);
// console.log(listItems);
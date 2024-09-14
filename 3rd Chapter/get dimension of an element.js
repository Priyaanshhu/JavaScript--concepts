// GET DIMENSION OF AN ELEMENT

// how to get the dimension of element
const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
console.log(info);

// if you just want only one property like "height" then :
// const info = sectionTodo.getBoundingClientRect().height;
// console.log(info);

// createElement, APPEND, PREPEND, REMOVE, BEFORE AFTER

// document.createElement()
// this will create a new element 
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach students";
const todoList = document.querySelector(".todo-list");

// append : append will add this element property at end of the given class(.todo-list)
//todoList.append(newTodoItem);

// prepend : prepend will add this element property at the beginning of the class(.todo-list)
todoList.prepend(newTodoItem);

const todo1 = document.querySelector('.todo-list li');
// remove : "remove" will remove the given element property 
// todo1.remove();
console.log(todo1)


// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");

// after : "after" will create this element property after the given class property 
// todoList.after(newTodoItem);

// before : "before" will create this element property before the given class property 
// todoList.before(newTodoItem);

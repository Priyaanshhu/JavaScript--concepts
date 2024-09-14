// CLONE NODES 

// node is element, so cloning an element

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";

// this will clone the node as "li", and "true" value will clone it deeply (every element)
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2);

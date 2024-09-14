// insertAdjacentHTML

 // syntax: element.insertAdjacentHTML(where, html)
 // beforebegin
 // afterbegin;
 // beforeend;
 // afterend;

const todoList = document.querySelector(".todo-list");
// "insertAdjacentHTML" is used to add element in HTML
// beforebegin : Before the element itself, as a previous sibling
todoList.insertAdjacentHTML("beforebegin", "<li>Teach Students </li>");

// afterend : After the element itself, as a next sibling
todoList.insertAdjacentHTML("afterend", "<li>Teach Students </li>");

// beforeend : Inside the element, after its last child.
todoList.insertAdjacentHTML("beforeend", "<li>Teach Students </li>");

// afterbegin : Inside the element, before its first child
todoList.insertAdjacentHTML("afterbegin", "<li>Teach Students </li>");

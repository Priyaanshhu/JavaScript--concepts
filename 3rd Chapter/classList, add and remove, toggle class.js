// CLASSLIST, ADD and REMOVE, TOGGLE CLASS

// classList : 
// classlist will all the classes whic exist in the given class (section-todo)
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);

// add : "add" will add this class 
sectionTodo.classList.add('bg-dark');

// remove : "remove" will remove this class
sectionTodo.classList.remove("container");

// contains : contains will tell you that given class(container) is exist or not 
const ans = sectionTodo.classList.contains("container");
console.log(ans);

// toggle :
// toggle will add the given class(bg-dark) if this class does not exist in page but if it's exist then toggle will delete it
sectionTodo.classList.toggle("bg-dark");
 
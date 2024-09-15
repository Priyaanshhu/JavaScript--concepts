// synchronous programming vs asynchronous programming

// synchronous programming :
// Javascript is a synchronous programming language 
// From 'Chapter 1' to 'Chapter 3' we're doing synchronous programming 
// synchronous programmingn is single threaded, means here it will execute task line by line 
// here, first it will execute 'Tast1' then 'Task2' and then 'Task3'

// Tast 1:
console.log("script start");
// Task 2:
for (let i = 1; i < 10000; i++) {
  console.log("inside for loop");
}
// Tast 3:
console.log("script end");


// Definition of synchronous programming vs asynchronous programming :-

// synchronous and asynchronous programming refer to the way code is executed and how it handles tasks that take time to complete.

// Synchronous Programming:
// - Code is executed line by line, one at a time.
// - Each line of code waits for the previous line to complete before executing.
// - Tasks are performed in a blocking manner, meaning the code execution is paused until the task is finished.
// - Examples: alert(), prompt(), console.log()

// Asynchronous Programming:
// - Code is executed in a non-linear fashion, allowing multiple tasks to run concurrently.
// - Tasks are performed in a non-blocking manner, meaning the code execution continues without waiting for the task to finish.
// - Uses callbacks, promises, or async/await to handle the outcome of asynchronous tasks.
// - Examples: setTimeout(), XMLHttpRequest, fetch(), AJAX requests

// Asynchronous programming is useful for tasks that take time to complete, such as:
// - Network requests
// - Database queries
// - File I/O operations
// - Time-consuming calculations

// By using asynchronous programming, you can:
// - Improve responsiveness and performance
// - Avoid blocking code execution
// - Handle multiple tasks concurrently

// JavaScript is inherently asynchronous, and its event-driven nature makes it well-suited for asynchronous programming.
// asynchronous programming code is run by Web API provided by Browser not by JavaScript engine 
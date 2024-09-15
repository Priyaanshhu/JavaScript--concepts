// setTimeout

// "setTimeout" is a function that schedules a callback function to be executed after a specified delay, measured in milliseconds.

// Syntax:
// setTimeout(callbackFunction, delay, [arguments])

// Parameters:
// - "callbackFunction": The function to be executed after the delay.
// - "delay": The time in milliseconds to wait before executing the callback function.
// - "[arguments]": Optional arguments to pass to the callback function.

// How it works:
// 1. "setTimeout" schedules the callback function to be executed after the specified delay.
// 2. The callback function is added to the browser's event queue.
// 3. After the delay, the browser checks the event queue and executes the callback function.

// Common use cases:
// - Delaying the execution of a function
// - Creating animations or effects
// - Implementing polling or refresh mechanisms
// - Handling asynchronous operations

// Important notes:
// - "setTimeout" does not block the execution of other code; it's non-blocking.
// - The delay is not guaranteed; it's a minimum delay.
// - "setTimeout" returns a timer ID, which can be used to cancel the timer using "clearTimeout".

// Best practices:
// - Use "setTimeout" for one-time delays.
// - Use "setInterval" for repeated intervals.
// - Avoid using "setTimeout" with very short delays (< 10ms).
// - Use "clearTimeout" to cancel timers when no longer needed.

console.log("script start");

const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);

for (let i = 1; i < 100; i++) {
  console.log("....");
}

// to check id of setTimeout :
console.log("setTimeout id is ", id);
// clearing srtTimeout by his id 
console.log("clearing time out");
clearTimeout(id);

console.log("Script end");

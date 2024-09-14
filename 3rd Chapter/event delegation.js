// EVENT DELEGATION 

// Event delegation is a technique where you attach an event listener to a parent element, and then use the event's target property to determine which child element triggered the event.

// Benefits:
// - Reduces the number of event listeners needed
// - Improves performance by minimizing the number of event listeners
// - Simplifies code maintenance by having a single event handler for multiple elements

// How it works:
// 1. Attach an event listener to a parent element
// 2. When an event occurs, the event listener is triggered
// 3. Use the event's target property to identify the child element that triggered the event
// 4. Perform the desired action based on the target element

// so basically here, we don't need to create eventListener to all child, parent, grandparents to call them we just need to give target element and it call all, this is known as event delegation

const grandparent = document.querySelector(".grandparent");

grandparent.addEventListener("click", (e) => {
  console.log(e.target);
});

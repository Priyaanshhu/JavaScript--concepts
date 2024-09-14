// EVENTS 

// events are actions or occurrences that happen in the system, such as:
// - User interactions (e.g., clicks, hover, scroll)
// - Changes in the document or elements (e.g., load, resize, change)
// - Network requests (e.g., fetch, XMLHttpRequest)
// - Timer events (e.g., setTimeout, setInterval)

// Events trigger a response or execution of a function, allowing your code to react to user interactions or changes in the system.

// Common event types:
// - Mouse events (e.g., click, mouseover, mouseout)
// - Keyboard events (e.g., keypress, keydown, keyup)
// - Touch events (e.g., touchstart, touchmove, touchend)
// - UI events (e.g., load, unload, resize, scroll)
// - Form events (e.g., submit, change, focus, blur)

// Handling events:
// - Event listeners: Attach a function to an element to respond to an event.
// - Event handlers: Functions that handle events, also known as callback functions.

const btn = document.querySelector(".btn-headline");
// to check every property of 'btn'
console.dir(btn);

// method --- addEventListener
btn.addEventListener("click", function(){
    console.log("you clicked me !!!!");
});

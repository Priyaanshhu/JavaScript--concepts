// textContent and innerText

const mainHeading = document.getElementById("main-heading");

// textContent will show the text with the hide text in browser 
console.log(mainHeading.textContent);

// innerText will don't show the text which are hide in browser 
console.log(mainHeading.innerText);

// change text 
mainHeading.textContent = "This is something else";
console.log(mainHeading.textContent);
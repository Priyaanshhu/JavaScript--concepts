// EVENT OBJECT

// Steps happening:
// 1) callback function will give to JavaScript engine 
// 2) it will give information of callback function with browser that event happen
// these information will be in object form

const allButtons = document.querySelectorAll(".my-buttons button");

for (let button of allButtons) {
  button.addEventListener("click", function(e) {
    console.log(e);
  })
}
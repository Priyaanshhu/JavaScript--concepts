// KEYPRESS, MOUSEOVER and MOUSELEAVE EVENTS

const body = document.body;

// keypress : 'keypress' will give output whatever we press on key(keyboard)
body.addEventListener("keypress", (e) => {
  console.log(e.key);
});

const mainButton = document.querySelector(".btn-headline");
console.log(mainButton);

// mouseover : 'mouseover' will work when we hover on given element
mainButton.addEventListener("mouseover", () => {
  console.log("mouseover event ocurred!!!");
});

// mouseleave : 'mouseleave' will work when we leave mouseover hover state
mainButton.addEventListener("mouseleave", () => {
  console.log("mouseleave event ocurred!!!");
});

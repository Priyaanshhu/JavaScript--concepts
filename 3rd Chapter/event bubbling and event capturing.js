// EVENT BUBBLING AND EVENT CAPTURING 

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// capturing events :
// browser will capture elements as body -> grandparent -> parent -> child and then go reverse as child -> parent -> grandparent -> body this is known as event capturing 
// this event capturing is 'false' in event bubbling so we make it 'true' then he captured events

child.addEventListener(
  "click",
  () => {
    console.log("capture !!!! child");
  },
  true
);
parent.addEventListener(
  "click",
  () => {
    console.log("capture !!!! parent");
  },
  true
);
grandparent.addEventListener(
  "click",
  () => {
    console.log("capture !!!! grandparent");
  },
  true
);
document.body.addEventListener(
  "click",
  () => {
    console.log("capture !!!! document.body");
  },
  true
);

// event bubbling :
// browser will capture the all parents elements of target element(child) is called event bubble 
// basically, if we click on child then parent, grandparent will also being print on console 

child.addEventListener("click", () => {
  console.log("bubble child");
});
parent.addEventListener("click", () => {
  console.log("bubble parent");
});
grandparent.addEventListener("click", () => {
  console.log("bubble grandparent");
});
document.body.addEventListener("click", () => {
  console.log("bubble document.body");
});

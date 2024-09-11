// PROTOTYPE

// in javascript function is ==> function + object
// the empty function is known as prototype
// only functions provide prototype property

function hello() {
  console.log("hello world");
}

// you can add your own properties in empty function/object 
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);
console.log(hello.prototype); 

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "oooohh hooo";
};
console.log(hello.prototype.sing());

// Note: In javascript "prototype" and "__proto__", "[[prototype]" these two are different things
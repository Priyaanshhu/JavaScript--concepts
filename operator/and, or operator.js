//AND, OR OPERATOR

// And operator (&&)
// 'and' will check both the values and if both the value is true then it will consider the condition as true otherwise as false
var firstName = "arshit";
var age = 16;

if(firstName[0] === "H" && age>18){
    console.log("Name starts with H and above 18");
}else{
    console.log("inside else");
}


// Or operator (||)
// 'or' will check the values and if any one value is true then it will consider the condition as true
var firstName = "arshit";
var age = 20;

if (firstName[0] === "H" || age > 18) {
  console.log("inside if");
} else {
  console.log("inside else");
}
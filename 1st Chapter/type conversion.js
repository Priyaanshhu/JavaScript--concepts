// TYPE CONVERSION

// data types (primitive data types)
// string "monika"
// number 5, 6, 4.5
// booleans 
// undefined
// null 
// BigInt
// Symbol

var age = 21; 
console.log(typeof age);

// Method 1 :

// 21 -> "21"
// convert number to string. 
age = age + "";
console.log(typeof(age));

// convert string to number. 
var myStr = +"25";
console.log(typeof myStr);


// Method 2 :

var age = "18";
age = Number(age);
console.log(typeof age);

var age = "18";
age = String(age);
console.log(typeof age);
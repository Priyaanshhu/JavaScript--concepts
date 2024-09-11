// CLONE ARRAY, CONCATINATE ARRAY, SPREAD OPERATOR

// CLONE 
// Method 1:

let array1 = ["item1", "item2"];
// let array2 = array1.slice(0);

// Method 2:

  // CONCATINATE 
// let array2 = [].concat(array1);

// Method 3:

  // SPREAD OPERATOR
let array2 = [...array1];

array1.push("item3");
console.log(array1===array2);
console.log(array1)
console.log(array2)

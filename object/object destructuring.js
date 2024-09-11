// OBJECT DESTRUCTURING

// A syntax feature that allows you to extract properties from an object and assign them to separate variables in a single statement, based on the property names.

const band = {
  bandName: "monikaro",
  famousSong: "road to peace",
  year: 2001,
  anotherFamousSong: "love",
};
// let {bandName, famousSong} = band;
// console.log(bandName);
// console.log(famousSong);

// if we want to change the variable name bandName to var1 and famousSong to var2 then :
let {bandName:var1, famousSong:var2} = band;
console.log(var1);
console.log(var2);

// if we want that other reamining keys of band should go to one var then (spread operator) :
let { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps);

// SPREAD OPERATOR IN OBJECT

const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

const newObject = { ...obj2, ...obj1, key69: "value69" };
console.log(newObject);

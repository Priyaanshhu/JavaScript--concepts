// CLONE USING object.assign() 

// "Object.assign()" is a method that copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
// "Object.assign()" performs a shallow copy, meaning it only copies the top-level properties and not nested objects or arrays.


const obj = {
    key1: "value1",
    key2: "value2"
}

// new method:
// const obj2 = {'key69': "value69",...obj};

// old method:
const obj2 = Object.assign({'key69': "value69"}, obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj2);


// NESTED DESTRUCTURING 

// A syntax feature that allows you to extract and assign values from nested objects or arrays (objects or arrays within objects or arrays) to separate variables in a single statement, using a nested syntax that mirrors the structure of the data.
const users = [
  { userId: 01, firstName: 'monika', gender: 'female' },
  { userId: 02, firstName: 'mesh', gender: 'male' },
  { userId: 03, firstName: 'kaira', gender: 'female' },
]

// taking the keys and also changing the variable name
const [{ firstName: user1firstName, userId }, , { gender: user3gender }] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);
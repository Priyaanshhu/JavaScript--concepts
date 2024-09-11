// NEW KEYWORD

// the "new" keyword is used to create a new instance of an object. It is typically used with a constructor function to create a new object.

// When "new" is used, the following steps occur:
// 1. A new, empty object is created.
// 2. The constructor function is called with the new object as its "this" context.
// 3. The properties and methods defined in the constructor function are added to the new object.
// 4. The new object is returned.

function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}
CreateUser.prototype.about = function() {
  return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function() {
  return this.age >= 18;
}
CreateUser.prototype.sing = function() {
  return "ohhhhh hoooo ";
}

const user1 = new CreateUser('monika', 'rai', 'moni@gmail.com', 23, "my address");
const user2 = new CreateUser('haru', 'ved', 'haruved@gmail.com', 21, "my address");
const user3 = new CreateUser('misti', 'chetarji', 'misti@gmail.com', 22, "my address");
console.log(user1);
console.log(user1.is18());

// if we want only that keys which are stored in CreateUser but not from his prototype :
for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}

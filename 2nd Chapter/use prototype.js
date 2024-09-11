// USE PROTOTYPE

// adding this objects in function prototype

/*
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'toon na na na la la ';
    }
}
*/

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype); // {}
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}

// using prototype
createUser.prototype.about = function() {
  return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function() {
  return this.age >= 18;
}
createUser.prototype.sing = function() {
  return "ohhhhh hoooo";
}

const user1 = createUser('monika', 'rai', 'moni@gmail.com', 23, "my address");
const user2 = createUser('haru', 'ved', 'haruved@gmail.com', 21, "my address");
const user3 = createUser('misti', 'chetarji', 'misti@gmail.com', 22, "my address");

console.log(user1);
console.log(user1.is18());
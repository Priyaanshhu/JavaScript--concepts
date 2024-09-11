// object.create()

// object.create() used to create an empty object and stored some other object values as a __proto__ , [[prototype]] -( meaning: as a reference)

// Example 1:
const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = Object.create(obj1); 
obj2.key2 = "unique";
console.log(obj2);
console.log(obj2.__proto__);


// Example 2:
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'jeenne mera dil luteya !!!';
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('monika', 'rai', 'moni@gmail.com', 23, "my address");
const user2 = createUser('haru', 'ved', 'haruved@gmail.com', 21, "my address");
const user3 = createUser('misti', 'chetarji', 'misti@gmail.com', 22, "my address");

console.log(user1);
console.log(user1.about());
console.log(user3.sing());
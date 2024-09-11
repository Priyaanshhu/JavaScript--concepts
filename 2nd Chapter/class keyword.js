// CLASS KEYWORD

// the "class" keyword is used to define a class, which is a template for creating objects. Classes were introduced in ECMAScript 2015 (ES6) to provide a more familiar syntax for object-oriented programming.

// A class definition typically includes:
// 1. Constructor: A special method called when an object is instantiated.
// 2. Properties: Data members of the class.
// 3. Methods: Functions that belong to the class.

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "ooooohhh hooooooo ";
    }
}

const user1 = new CreateUser('monika', 'rai', 'moni@gmail.com', 23, "my address");
const user2 = new CreateUser('haru', 'ved', 'haruved@gmail.com', 21, "my address");
const user3 = new CreateUser('misti', 'chetarji', 'misti@gmail.com', 22, "my address");

console.log(user1);
console.log(user1.is18());

// how to check prototype of "User1" object 
console.log(Object.getPrototypeOf(user1));

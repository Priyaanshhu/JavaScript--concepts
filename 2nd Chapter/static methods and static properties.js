// STATIC METHOD AND STATIC PROPERTIES 

// static properties and methods are properties and methods that belong to a class or function itself, rather than to an instance of that class or function.

// Static Properties:
// - Are properties that are shared by all instances of a class or function
// - Are accessed directly on the class or function, without creating an instance
// - Are used to store constants, configuration values, or other data that is relevant to the class or function as a whole

// Static Methods:
// - Are methods that belong to a class or function itself, rather than to an instance
// - Are called directly on the class or function, without creating an instance
// - Are used to provide utility functions, factory methods, or other functionality that doesn't depend on instance data

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is person class';
    }
    static desc = "static property";
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 12;
    }

    isCute(){
        return true;
    }
}

const person1 = new Person("meena", "mehra", 26);
console.log(person1.eat());

const info = Person.classInfo();
console.log(info);

console.log(person1.desc);

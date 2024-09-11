// GETTERS AND SETTERS

// getters and setters are special methods that allow you to control access to an object's properties. They are used to define computed properties, which are properties that don't have a simple value, but instead, have a function that calculates the value on the fly.

// Getter:
// A getter is a method that returns the value of a property. It's called when you try to access the property.

// Setter:
// A setter is a method that sets the value of a property. It's called when you try to assign a value to the property.

// Using both getter and setter:
// You can use both getter and setter to create a property that has a computed value and also allows you to set a new value.

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // getter
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    // setter
    // here we'll use "split" so the value which are given can be divided by " " and go stored in two different given variable
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("monika", "mehra", 5);
console.log(person1.fullName);

person1.fullName = "mohit vashistha";
console.log(person1);

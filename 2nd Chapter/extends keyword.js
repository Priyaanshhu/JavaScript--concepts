// EXTENDS KEYWORD 

// the "extends" keyword is used to create a new class that inherits properties and behavior from an existing class, known as the parent or superclass. This is a key feature of object-oriented programming (OOP) and allows for code reuse and a more hierarchical organization of code.

// Using "extends" provides benefits like:
// - Code reuse: Child classes inherit properties and methods from parent classes.
// - Hierarchical organization: Classes can be organized in a tree-like structure.
// - Polymorphism: Child classes can override or add new behavior.

// Note that "extends" can only be used with classes, not with functions or other types of objects.

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

// using "extends" to give 'Dog', 'Animal' properties and methods
class Dog extends Animal{} 

const tommy = new Dog("tommy", 3);
console.log(tommy);
console.log(tommy.isCute());

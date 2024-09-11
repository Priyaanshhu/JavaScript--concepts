// SUPER KEYWORD 

// the "super" keyword is used to access the parent class's properties and methods from a child class. It's used in conjunction with the "extends" keyword to create inheritance relationships between classes.

// Here are some uses of "super":
// 1) Calling parent class constructor: "super()" calls the parent class's constructor, allowing you to initialize properties and perform setup tasks.
// 2) Accessing parent class properties: "super.propertyName" accesses the parent class's properties, allowing you to read or write values.
// 3) Calling parent class methods: "super.methodName()" calls the parent class's methods, allowing you to reuse behavior.
// 4) Overriding parent class methods: "super.methodName()" can be used to call the parent class's method from an overridden method in the child class.

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

class Dog extends Animal{
    constructor(name, age, speed){
        //super
        super(name,age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
} 

const tommy = new Dog("tommy", 3,45);
console.log(tommy);
console.log(tommy.run());

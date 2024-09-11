// CREATE YOUR OWN METHOD 

// Method is :- function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "harish",
    age: 19,
    about: personInfo
}
const person2 = {
    firstName : "mamta",
    age: 22,
    about: personInfo
}
const person3 = {
    firstName : "nurika",
    age: 21,
    about: personInfo
}

person1.about();
person2.about();
person3.about();


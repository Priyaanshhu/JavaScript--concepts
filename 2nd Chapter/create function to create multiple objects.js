// CREATE FUNCTION TO CREATE MULTIPLE OBJECTS

// 1.) function (that function create object)
// 2.) add key value pair 
// 3.) to return objects

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 =  function(){
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser('monika', 'rai', 'moni@gmail.com', 22, "my address");
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);
// FALSY VALUES :
// (false, "", null, undefined, 0)

let firstName;

if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kinda empty");
}  

// TRUTHY VALUES  
// truthy values can be anything except falsy values like :
// ("abc", 1, -1)

let secondName= 1;

if(secondName){
    console.log(secondName);
}else{
    console.log("secondName is kinda empty");
}
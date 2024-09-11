// sort() METHOD

// the `sort` method is an array method that sorts the elements of an array in place and returns the sorted array.

// Syntax:
// array.sort([compareFunction])

// Where:
// - "compareFunction" is an optional function that defines the sort order

// If no "compareFunction" is provided, the "sort" method sorts the elements in ascending order, based on their string representations.

// If a "compareFunction" is provided, it is called with two elements to compare, and should return:
// - A negative value if the first element should come before the second
// - A positive value if the first element should come after the second
// - Zero if the elements are equal


// ASCII TABLE 
//char : ascii value

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64

// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90

// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96

// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125


// Example 1: (with string)
const userNames = ['manika', 'abcd', 'mohan', 'nitu', 'aabc', 'ABC', 'Manika'];
userNames.sort();
console.log(userNames);


// Example 2: (with numbers)
// sort will take this number 1st character as a string and compare this with ASCII value to sort (ascending/descending) this
// ["5", "9", "1210", "410", "3000"] 
// [53, 57, 49, 52, 51]
const numbers = [5,9,1200, 410, 3000];
// so for getting this as a ascending order we will write like this :
numbers.sort((a,b)=>{
    return b-a; //descending 
});
numbers.sort((a,b)=>a-b); //ascending

// in the back sort will compare the value like this to print :
// 1200,410 
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4 
console.log(numbers);


// Example 3 :

// price lowToHigh, HighToLow 
const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 3000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]

// lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price
});
console.log(lowToHigh);

// highTolow
const highToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;
});
console.log(highToLow);


// Example 4 :

const users = [
    {firstName: "monika", age: 27},
    {firstName: "abhay", age: 25},
    {firstName: "bindiya", age: 23},
    {firstName: "garish", age: 18},
]
users.sort((a,b)=>{
    if(a.firstName > b.firstName){
        return 1;
    }else{
        return -1;
    }
});
console.log(users);
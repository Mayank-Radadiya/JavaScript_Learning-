// String

//real way to declare a string 
let User = new String("User01")  // String is stored as form of object.
console.log(typeof User);   // Object
//  User01 = {
     // 0: "U",
     // 1: "s",
     // 2: "e",
     // 3: "r",
     // 4: "0",
     // 5: "1"
     // length: 6

//}

let name = "XYZ"
console.log(typeof name);   // String
let age  = 20

// Add  String and Number
console.log(name + " " + age);    //  XYZ 20

//Right way to add  String and Number.
console.log(`My name is ${name} and My age is ${age}.`);
//Output:  My name is XYZ  and My age is 20

console.log(typeof name);   // String




// Different  type of method/function  on string.

// let name = "XYZ"
// console.log( name.toUpperCase());   // XYZ
// console.log( name.toLowerCase());   // xyz
// console.log( name.charAt(0));   // X   
// console.log( name.charAt(2));   // Z
// console.log( name.indexOf('Y'));   // 1


let gameName = "XYZ Of Game"
const newString = gameName.substring(0, 6)
console.log(newString);

const newStringOne = "   GAME OF EVENTS    "
console.log(newStringOne); // output:"    GAME OF EVENTS    "
console.log(newStringOne.trim());  // Use for remove extra space before and after string
// output: GAME OF EVENTS



const url = "https://xyz.com/no%20game"
console.log(url.replace('%20', '-'))  
// output: https://xyz.com/no-game



const str = 'The quick brown fox - jumps - over - the lazy dog.';

const words = str.split(' '); // Split convert string into Array base on white space.
console.log(words);
// Expected output:
// [
//     'The', 'quick', 'brown',
//     'fox', '-',     'jumps',
//     '-',   'over',  '-',
//     'the', 'lazy',  'dog.'
//   ]


const words2 = str.split('-'); // Split convert string into Array based on "-" .
console.log(words2);
// Expected output:
// [ 'The quick brown fox ', ' jumps ', ' over ', ' the lazy dog.' ]


//Declare Number 
let x = 50   //type of x  is number.

//other Way..
let y = new Number(100)  // typeof  y is object.

console.log(x);  //output: 50
console.log(y);  //output: [Number: 100]

//some function/method on Number....

console.log(x.toString())   
// Output:  "50"
console.log(x.toFixed(2));
// Output: 50.00

let a = 50.5656
console.log(a.toPrecision(3));
// Output: 50.6
console.log(a.toPrecision(4));
//Output: 50.57

// console.log(Math.abs(-10));   // Output:10    only negative to positive
// console.log(Math.ceil(4.2));     // Output:  5
// console.log(Math.floor(4.9));    // Output:  4
// console.log(Math.min(4, 3, 6, 8));  // Output:  3
// console.log(Math.max(4, 3, 6, 8));   // Output:  8


console.log(Math.random());   // Output: any random number between 0 and 1.

console.log((Math.random()*10) + 1);  //If don't went 0 so and +1.
console.log(Math.floor(Math.random()*10) + 1);  // only single digit value. like 2,5,7 etc.


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


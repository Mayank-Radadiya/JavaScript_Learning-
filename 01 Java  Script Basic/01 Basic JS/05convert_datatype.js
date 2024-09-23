// Some time we get the input from user at the form of string and convert to  Number
let input = "10"

console.log(typeof (input));    // string

// Convert to Number use this in-build function:  
//        Number(variable_name)

let number = Number(input); // number

console.log(typeof (number));    // number



// what if user not enter the number but entered like  "10a" or  "50gf" like that..

let inputUser = undefined

let number2 = Number(inputUser)
console.log(number2);     // NaN
console.log(typeof(number2)) ; // number
  

/* different scenarios 
                afterNumber function 
user-input           datatype 

  10    ------------  number
  50xy--------------   NAN
  true  ------------   1 
  false ------------   0
  null --------------- 0
  undefined ---------  NaN
*/

let  a = 10
// convert  to string
let b = String(a)
console.log(typeof (b));   // string

console.log(b);

// convert  number to Boolean 

let c = 1
let d = Boolean(c)
console.log(d);   // true

// 1 => true
// 0 => false
// NaN,undefined ,null  => false
//  "Hello"   => true
//  ""   => false



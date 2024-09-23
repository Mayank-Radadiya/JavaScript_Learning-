// Array

a = [1,2,3,4,5];
console.log(a);

// Array index Start With 0;
console.log(a[0]);  //Output: 1

// Push: Add new value At the last of Array
a.push(6);
console.log(a);  //Output:[1, 2, 3, 4, 5, 6]

// POP: Remove  value At the last of Array
a.pop();
a.pop();
console.log(a);  // [ 1, 2, 3, 4 ]   //because we use pop method two times so last two values are remove.


// unShift: Add new value At the Start of Array
a.unshift(9);
console.log(a);  //output:  [ 9, 1, 2, 3, 4 ]


//  shift :  Remove  value At the Start of Array
a.shift();
console.log(a);  // output:  [ 1, 2, 3, 4 ]

//---------------------------------------------------------------------------

const marvel_heros = ["thor", "Iron man", "spider man"]
const dc_heros = ["superman", "flash", "batman"]


marvel_heros.push(dc_heros) // not good way to add two arrays...
console.log(marvel_heros);
//Output:  [ 'thor', 'Iron man', 'spider man', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heros[3][1]);  //Output: "flash"


//Good way to add two  array.
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); 
//Output:  [ 'thor', 'Iron man', 'spider man','superman', 'flash', 'batman']


// what if we have more then two arrays,that time we use this method.

var Q = [5 ,10 ,15, 20, 25, 30]
var W = ["a", "b", "c", "d", "e", "f"]
var R = ["!" , "@", "#","%" , "&" ]

var allArray = [...Q, ...W, ...R]
console.log(allArray);
//Output: [5 ,10 ,15, 20, 25, 30,"a", "b", "c", "d", "e", "f", "!" , "@", "#","%" , "&"]

 


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)// convert into only one array.
console.log(real_another_array);
//Output: [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]




//Convert String , Number and other data type to Array.

var name  = "array"
var obj1 = {
    name: "xyz",
    age: 20,
    city: "delhi"
}
var name_array = Array.from(name);
console.log(name_array); //Output: [ 'a', 'r', 'r', 'a', 'y' ]

var obj1_array = Array.from(obj1);
console.log(obj1_array); //Output:[]

//conversion of array
var point1 = 100; 
var point2 = 200; 
var point3 = 300; 
var point4 = 400; 
var point5 = 500; 

var AllPoint = Array.of(point1,point2,point3,point4,point5);
console.log(AllPoint);
//Output:[ 100, 200, 300, 400, 500 ]


//-------------------------------------------------------------------------------
// Array is stored  as a object.
//  a = [1, 2, 3, 4]
//it is stored like that:
//   a = {
//     0: 1,
//     1: 2,
//     2: 3,
//     4: 4
//    }
//
// How to check given viable is array or object.
// typeof()   function not work for array.it's give the output is  as a :  object
//  for array ----
// Array.isArray(a);  true means Array.    False means it is object 


//----------------------------------------------------------------------------------
// some other method
 var Array = [5 ,7, 10, 15, 20, 30, 40, 50]

 console.log(Array.includes(10));   //Check where 10 is present in array or not.
 // Output: True  
 console.log(Array.indexOf(10));  // Check  the index of 10
 // Output: 2 
 console.log(Array.indexOf(0));  // 0 is not present in array 
 // Output: -1 


 //join function
 var  xyz = [10, 20 , 30, 40, 50, 60]
 var abc = xyz.join();
 console.log(abc);  // output: 10,20,30,40,50,60     
 // type of abc = "string"
 // join function copy  the xyz and convert it string.

//--------------------------------------------------------------------------------
 //splice()

 const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');    // splice(where to start, deleteCount or remove the index , add new value)
// Inserts at index 1 , not delete a second index , add "feb" month
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
    //   at 4th index  replace it.

// add more then one element at index.

months.splice(5,0 ,"jun" ,"jul" ,"aug" ,"sep");
console.log(months);
// Output : ["jan", "feb", "mar", "apr", "may","jun", "jul", "aug", "sep]



//-------------------------------------------------------------------------------
// Slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//Object: 

var Raj ={
    age:20,
    hight:"5.8feet",
    collage: "xyz University",
    isLoginIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    "email": "james@com"
    //Property: value
}
console.log(Raj);
console.log(Raj.age);  //Output:20
console.log(Raj["age"]);  //Output:20   Other way to access the Object Value.
console.log(Raj['email']); //Output: james@com 


//change  values in object
Raj.age = 19;
console.log(Raj.age);

//  Delete the any  key/Property  like remove the collage from Raj.
delete Raj.collage;
console.log(Raj);

//Other way to declare Object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);    //Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "ABC",
            lastName: "xyz"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);  //ABC

//Use symbol in object
var symbol1 = Symbol("XYZ");
var symbol2 = Symbol("ABC");

 var obj2 = {
     symbol1: "XYZ",  
    [symbol2]: "ABC"
}
console.log(obj2);
//output: { symbol1: 'XYZ', [Symbol(ABC)]: 'ABC' }

console.log(typeof obj2.symbol1);   //Output:string
console.log(typeof obj2[symbol2]);  //Output:Symbol



//----------------------------------------------------------------
//freeze function:
var obj3 = {
    name: "XYZ",
    age: 20,
    email: "xyz@gmail.com"
}
//if we went no one can change the object property value that time we use freeze function.

obj3.age = 25
console.log(obj3);  //Output:{ name: 'XYZ', age: 25, email: 'xyz@gmail.com' }

Object.freeze(obj3);
obj3.age = 30;
console.log(obj3); // Output:{ name: 'XYZ', age: 25, email: 'xyz@gmail.com' }
// age value not change yet. 

//-------------------------------------------------------

//Function  in Object.
 var obj4 = {
    Name: "ABC",
    age: 20,
    email: "xyz@gmail.com"
}

obj4.greeting = function(){
    console.log("Hello " + this.Name);
    // console.log(`Hello ${this.Name}`);
}
console.log(obj4.greeting());  //Output: Hello ABC



//combine two and more Object

const  obj_a = {1: "a", 2: "b"}
const  obj_b  = {3: "a", 4: "b"}
const  obj_c = {5: "a", 6: "b"}

const obj_d = { obj_a, obj_b } // Not a good way to combine two object.
console.log(obj_d); 
//Output: { obj_a: { '1': 'a', '2': 'b' }, obj_b: { '3': 'a', '4': 'b' } }


const obj_f = Object.assign({}, obj_a, obj_b, obj_c)
console.log(obj_f);
//Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


 //best way to combine  objects
 var AllObj = {...obj_a,...obj_b,...obj_c}
 console.log(AllObj);
 //Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//--------------------------------------------------------------------------
 
// Access keys and Values of the object.

 var x = {
    id: "5452",
    email: "email@example.com",
    isLoggedIn: true
 }
  console.log(Object.keys(x));  //Output: [ 'id', 'email', 'isLoggedIn' ]
  console.log(Object.values(x));  //Output: [ '5452', 'email@example.com', true ]

  //It's return an array

  console.log(Object.entries(x)); 
  //Output: 
//   [
//     [ 'id', '5452' ],
//     [ 'email', 'email@example.com' ],
//     [ 'isLoggedIn', true ]
//   ]
console.log(x.hasOwnProperty("id"));  // true
  

//----------------------------------------------------------------
// some special case:
const users = [
    { //array index 0
        id: 1,
        email: "h@gmail.com"
    },
    {  //array index 1
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email);  // 'h@gmail.com'


//  --------------------------------------------------------------

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "ABCD"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  // course.courseInstructor 

// console.log(courseInstructor);
console.log(instructor);  //Output: "ABCD"

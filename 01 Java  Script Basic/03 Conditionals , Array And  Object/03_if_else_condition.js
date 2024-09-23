// <, >, <=, >=, ==, !=, ===, !==

//&& = and
//

// if , else
a = 5;
b = 8;

if(a>b){
    console.log("Hi !");
}
else{
    console.log("Hello")
}

// else-if (More then one if )
if(a>b){
    console.log("A is Grater")
} else if(a==b){
    console.log("A and B are Same")
}
else(a<b);{
    console.log("B is Grater")
}

//----------------------------------------------------------------

let score = 200
if(score > 100) console.log("Winner");   //Output: 'Winner'



let userLoggedIn = true
let UserCartIsNotEmpty = true
// &&  =  and
if (userLoggedIn && UserCartIsNotEmpty) {
    console.log("Allow to buy course"); 
}else{
    console.log("Not Allow to buy course");
} //Output: 'Allow to buy course'

let loggedInFromGoogle = false
let loggedInFromGmail = true
//     ||  =  or    

if(loggedInFromGmail || loggedInFromGoogle){
    console.log("User logged in");
}else{
    console.log("User not logged in");  
}//Output: 'User logged in'



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
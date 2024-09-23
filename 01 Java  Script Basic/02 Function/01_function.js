// function   

function x(){
   console.log("Hello World!!!"); 
}
//Now  Call the function
x(); 



//Using Function on Given Input:

//      function function_name(parameters){
//         code;
//    }
//    function_name(arguments)

function add(a,b){
    c = a+b;
    console.log(c);
}

add(5,10);

//other way to declare function

 let a = function(a,b){
    c = a+b;
    console.log(c);
}
a(20,5)  //Output: 25
  

// -------------------------------------------------------------------------

//return and consol.log() both are different

function add(x,y){
    console.log(x+y);  // consol.log() only prints the variable/statement.
}

let addNumber = add(1,1)
console.log(addNumber);  //Output: undefine.


function addTwo(x,y){
    return x+y;   //return stored a return value in new variable.
}

let TwoNumberAdd = addTwo(2,2)
console.log(TwoNumberAdd);   //Output: 4 



// other best example of about return method 

function UserLogin(userName){
    return `${userName} welcome to website` 
}

// now call the function..
UserLogin("Joy");
//Not get any output because return method is return the value not print any value. if i want to print that statement , first stored the return value in any variable and then use console.log().

let userLogin = UserLogin("Joy");
console.log(userLogin);  //Output: Joy welcome to website

//if we went return method without any other variable that time use this way to print the statement.

console.log(UserLogin("joy"));  //Output: joy welcome to website



//------------------------------------------------------------------------------

//Example we have online e-commerce website. we have to calculate the total price in cart. But we don't know user how many item will add.

// function CalculateTotalPrice(...item){    //... is rest operator  
//     return item
// }
// var totalPrice = CalculateTotalPrice(50,200,399)
// console.log(totalPrice); //Output:[ 50, 200, 399 ] Rest operator return in form of array


function CalculateTotalPrice(...item){   
    let sum = 0;
    item.forEach(item => {
        sum += item;
    });
    return sum;
}
var totalPrice = CalculateTotalPrice(50,200,399)
console.log(totalPrice);


//---------------------------------------------------------------------------
//use object in function

var User = {
    Name: "John",
    Price: 999
}
function UserInfo(anyObject){
    console.log(`${anyObject.Name} your total bill is ${anyObject.Price}`);
}

UserInfo(User);  //Output: John your total bill is 999
//other way to to define object
UserInfo({
    Name: "John",
    Price: "99$"
})   //Output: John your total bill is 99$

// For array
var UserInfoArray = ["abc" , "xyz" , "pqr"]
function UserArray(anyArray){
    console.log(`1: ${anyArray[0]}  2: ${anyArray[1]} 3: ${anyArray[2]}`);
}
UserArray(UserInfoArray); //Output: 1: abc  2: xyz 3: pqr



// ----------------------------------------------------------------------------

console.log(addOne(5))   //Output: 6

// function declaration

function addOne(num){
    return num + 1
}


//function declare  in one variable

// addTwoNum(5)    //Output: show error because we declare 'addTwoNum'  variable  before initialization.
const addTwoNum = function(num){
    return num + 2
}
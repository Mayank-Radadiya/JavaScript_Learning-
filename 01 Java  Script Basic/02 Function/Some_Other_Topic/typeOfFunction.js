//  Higher order function:
//    function  which are accept the function as parameter or return a function.

function x(){
}

x(function (){

});
// in this function as a parameter is a anther function.

//   In this function function return anther function.
function y(){
    return function (){

    }
}
// This both type is called as Higher function.
// ---------------------------------------------------------------------------------------

//  Constructor Function:
//   When we have a many elements which have same properties that this we use Con. function.
// In construction Function "this " use.

function  Div(){
    this.hight = 100;
    this.width = 100;
    this.color = "Blue";
}

let Div1 = new Div();
let Div2 = new Div();
let Div3 = new Div();

console.log(Div1);
console.log(Div2);
console.log(Div3);


// Output:
// Div { hight: 100, width: 100, color: 'Blue' }
// Div { hight: 100, width: 100, color: 'Blue' }
// Div { hight: 100, width: 100, color: 'Blue' }

// if we want some properties different.Use this way  constructor  function.
// want different color. use this way function parameter .
function  div(color){
    this.hight = 100;
    this.width = 100;
    this.color = color;
}
let div1 = new div("pink");
let div2 = new div("green");

console.log(div1);
console.log(div2);
// Output:
// div { hight: 100, width: 100, color: 'pink' }
// div { hight: 100, width: 100, color: 'green' }

// ------------------------------------------------------------------------------------

//
//  First Class function:
//   you can use a save the function in variable and pass as arguments in other function .
// ex;

function w(z){
    z();
}

w(function z(){
    console.log("Hey!!");
}); 


// IIFE:    immediately  invoked function expression:
//   use for store a private  variable.
//
//syntax:
//        (function(){

//         })();

let ans = (function(){
    let private = 7;  // user can't see the private value.

    return{
     getter:function(){
        console.log(private);  // use to see the private value.
    },
    setter:function(val){  // use the change the private value.
        private = val;
        console.log(private);
        // console.log(private);
    }
}
})();
console.log(ans.getter());  // if we want to access the private value use this way function.
console.log(ans.setter(12));  // if we want to change the private value use this way function.


let z =(function(a,b){
    return a + b;
})(2,3);

console.log(z);


// var

// var is function scoped.WE can use variable in any where in function.
//  Var can add itself in Windows object.
function z(){
    for(var x = 0; x<5; x++){
        console.log(x);
    }
    console.log(x);  // x will be the last number of for loop.
} 
z();
console.log(x);  //  x is undefined .we can't access the x outside the class.

// let:   let is braces scoped 
//  Can't use after  {},[],()
//  let, const can not add itself in window object.
function y(){
    for(let i = 3; i<7; i++){
        console.log(i);
    }
    console.log(i);  // In output i is undefined.
} 
y();


// The main difference between var and let is that var is function-scoped, while let is block-scoped. This means that a var variable is visible to the whole function in which it is declared, while a let variable is only visible within the block in which it is declared.


// let is braced scoped
{
    let a = 15;
    var b = 20;
}
console.log(a);  // it's shows a error.
console.log(b);  
//   If we write any key variable/value in   "{}" this bracket, that value is local value or local scope and other  can't access it.//
//   other all value are global scope.
//Ex:

let x = 50;

function xyz() {
  let a = 10;
  console.log(a); // Output : 10   Here a is local scope.we can"t access outside the function.
  console.log(x); // output: 50      Here x is global scope.we can access outside and inside  the function.
}

xyz();

//  "this" keyword in different contexts.
// "this" keyword in global scope refers to window object. mean "this" keyword  in global scope give window object.
console.log("Global Scope", this); // Output : Global Scope [Object Window]

// "this" keyword in local scope gives the window object.
function abc() {
  console.log(this); // Output : Function Call Expression [Object Window]
}
abc();

// "this" keyword in method gives object.

let obj = {
  a: 10,
  b: 20,
  x: function () {
    console.log(this);
  },
};
console.log(obj); // output: { a: 10, b: 20, x: [Function: x] }

obj.x(); //  output:  { a: 10, b: 20, x: [Function: x] }

//in method "this" keyword gives the object values.

//  "this"    value.
//  in global  => window
// in function =>  window
// in method =>  object.

//  "Call" keyword:
// When we use "this" keyword in a function we get a window.if we went the object when we use "this" keyword that time "call" keyword we use.

function f() {
  console.log(this); // Output : Function Call Expression [Object Window]
}
let obj1 = {
  a: 20,
  b: 50,
};

f(); // Output : Function Call Expression [Object Window]

// using call keyword we can get the object window's values in function abc() instead of window object.

f.call(obj1);  // Output : Object Window{a=20,b=50}




//  "apply"   keyword:

// call and apply mostly the same but apply takes an array as argument where you can pass multiple arguments to the function.
function f1(arg1, arg2) {
  console.log("This is ", this);
  console.log("Argument 1 is", arg1);
  console.log("Argument 2 is", arg2);
}
let obj3 = {
  val1: "Hello",
  val2: "World"
}
f1.call(obj3,10,20);

f1.apply(obj3, [10, 20]);   //  Output : This is  [object Window] Argument 1 is 10 Argument 2 is 20


//Bind keyboard:

// Same as call and apply.
// But when we use the "bind" keyword it will stored in the variable and execute later whenever needed.


function f2(arg1, arg2) {
    console.log(this);
    console.log( arg1);
    console.log( arg2);
  }
  let obj4 = {
    val1: "Hii",
    val2: "Hello"
  }
//          f2.bind(obj4,100,200);       this will not run. we need to stored the bind value in other variables.Bind key word   binded  function f2 and obj4 in other variable and when  execute later whenever needed.
  let bindFunc = f2.bind(obj4,100,200);
  bindFunc();  // binded function




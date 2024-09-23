//  Hoisting//

console.log(a);
let a=5;

//Real code is like that::

//       var a;
//       console.log(a)
//       a=5;
//       variable is always declared on  top of code. 
//Result: Undefined


// addTwoNum(5)    //Output: show error because we declare 'addTwoNum'  variable  before initialization.

const addTwoNum = function(num){
    return num + 2
}





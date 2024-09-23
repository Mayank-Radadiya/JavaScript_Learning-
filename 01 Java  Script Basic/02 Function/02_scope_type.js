// Execution Cortex:   When Function  call or run Function create a imaginary container which has three part:

//    variable , parent function  and lexical environment

// lexical environment  :  means function which variable can access or not.
// ex. in below function function x() can't use variable b.
//    lexical environment shows which variable function can access and which not.

function x(){
    let a = 5;
    function v(){
        let b = 8;
    }
    console.log(a);
    console.log(b);
}
x();

// Output:
//       5
//       undefined



function Let_Var(){
    let a = 10
    const b = 20
    var c = 30
}
 
console.log(a);    //Output: Undefined
console.log(b);     //Output: Undefined
console.log(c);     //Output: 30

// var is not scope defined.
// let and const is scope define.
// That's why we always use let and const.......



function one(){
    const username = "ABC"

    function two(){
        const website = "youtube"
        console.log(username);   //Output: ABC
        //function One is parent function of two(). That's why we always use let in function two()
    } 

    
    // console.log(website);    //Output:  undefined

     two()

}

one()

// A closure in JavaScript occurs when a function retains access to variables from its parent scope, even after that parent function has returned. This allows the inner function to remember and interact with those variables.

// function outerFunction() {
//   let outerVariable = 'I am from the outer scope';

//   function innerFunction() {
//     console.log(outerVariable); // Accesses the outer variable
//   }

//   return innerFunction;
// }

// const closure = outerFunction();
// closure(); // Logs: 'I am from the outer scope'


//best Example:

 function counter() {
    let  n = 0 
    return function(){
        return ++n
    }
}
const CounterValue = counter();

console.log(CounterValue());
console.log(CounterValue());
console.log(CounterValue());
console.log(CounterValue());
console.log(CounterValue());


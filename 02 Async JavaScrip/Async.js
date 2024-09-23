
//   Synchronous code is executed sequentially, with each line waiting for the previous line to finish before executing. This means that if one line of code takes a long time to execute, the entire application will be blocked until that line finishes.


   function f1() {
    // some code
  }
  
  function f2() {
    // some code
  }
  
  function f3() {
    // some code
  }
  
  // Invoke the functions one by one
  f1();
  f2();
  f3();


//Asynchronous code, on the other hand, allows JavaScript to continue running while waiting for certain operations to complete. This is especially useful for operations like fetching data from a server, which can take a long time to complete.
// mostly use for asynchronous code.


//     setTimeout
//     setInterval
//     Promise
//     axios
//     XMLHttpRequest
//     fetch


console.log('================================');
setTimeout(function(){
    console.log('hello');
},5000);

console.log('================================');

// output:

// ================================     
// ================================
// hello                                  after 5 seconds


// How Js sync and  async  code run.
// In javascript there are two stack.
//      main stack and side stack


//The main stack is where first synchronous code is executed.
//All async code is  executed but not show the output in a separate side stack.it will wait ,when all sync code is executed mean main stack  empty that time event loop run between main stack and side stack.
// Now async code output is ready so event loop bring to the main stack.now async code executed.


console.log('1');

setTimeout(function() {
    console.log('2');
}, 0);         

console.log('3');

// Output:
// 1           // time is 0s still
// 3        // first all sync code executed  and then
// 2         // last async code executed



// In this example, the setTimeout function is used to schedule an asynchronous operation. The console.log('1') statement is executed first and pushed onto the main stack. The setTimeout function is then invoked, and its callback function is registered with the event loop. The console.log('3') statement is then executed and pushed onto the main stack.

// As we can see from the output, the asynchronous code console.log('2') is executed after the synchronous code console.log('3'), even though it was registered with the event loop before the synchronous code. This is because the event loop only executes the callback function from the side stack after the main stack has been emptied.
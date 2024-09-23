// IIFE:    immediately  invoked function expression


// IIFEs prevent pollution of the global JS scope.   In a traditional function, if you create a variable within the function, it is accessible in the global object. If you define a variable in an IIFE, it is accessible only directly within the function.

//Other use case is to private  a variable.so no one can access in the global and browser.


(function serverCheck(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   // Output: DB CONNECTED


// IIFE in arrow function
( () => {
    console.log(`DB CONNECTED TWO`);
})();  //Output: DB CONNECTED TWO

//----------------------------------------------------------------
( (name) => {
    console.log(`${name} welcome`);
})("Admin");   //Output:  Admin welcome
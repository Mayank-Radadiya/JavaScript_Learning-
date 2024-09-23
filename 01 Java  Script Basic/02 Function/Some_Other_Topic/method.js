// Method

// if we declare a function in an object is called as method. 

 var obj = {      //obj is  object.
    x: function(){          // Now x is not a property. It is method.Because x  value is function
        console.log("Hello world");
    }
};
obj.x(); // Output : Hello world





// // If we call a function outside of the object, it's called a Function Declaration.
function funcDecl() {
    console.log("Function Declaration");
}   // Output : Function Declaration
funcDecl();

// But when you use the keyword 'function', without declaring it within an object or function parameters, then it becomes a Function Expression.
// But when you use the keyword 'function', it becomes a Function Expression and can be assigned to variables or properties.
// But when you use 'var', it becomes a Function Expression and can be either named or unnamed.
// Named Function Expressions are assigned to variables. They have their own scope.
var funcExprNamed = function funcExprNamed() {
    console.log("Named Function Expression");
};
funcExprNamed();     // Output : Named Function Expression

// // Unnamed Function Expressions do not have their own name property on the window object.
// // So they don’t have their own scope. They just get added to whatever variable holds them.
// var funcExprUnnamed = function () {
//     console.log("Unnamed Function Expression");
//     }
 


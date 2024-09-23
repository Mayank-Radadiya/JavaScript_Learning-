//   Falsy:  Those values That means false
//   Falsy:  0, -0, bigInt 0n , false,  undefine, "" ,  Null,  NaN, document.all


//   Truly: means true values.
//    Those are all values which not falsy is truly. 
//truthy values
// "0", 'false', " ", [], {}, function(){}


if(null){
    console.log("Hello");
}else{
    console.log("Hii");
}//  output:    Hii

if(5){
    console.log("True");
}else{
    console.log("False");
}
// output:    true

//----------------------------------------------------------
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
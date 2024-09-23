//  example of Async function

//     setTimeout
//     setInterval
//     Promise
//     axios
//     XMLHttpRequest
//     fetch


//SetTimeout function:
//  Execute code  after given time.

setTimeout( function(){
    console.log("Async task 1");
},3000)

// output: Async task 1 
// Code execute after 3 seconds.


// other way ..
// we can also use arrow function.
let asyncTask = function(){
    console.log("Async task 2");
}
// let asyncTask = () => {
//     console.log("Async task 2");
// }  
// both functions are same.

setTimeout(asyncTask , 2000)
// output: Async task 2
// Code execute after 2 seconds.

//----------------------------------------------------------------

// clearTimeout()  use for stop the settimeout() function.

//best use case:
const changeText = function(){
    alert("Timer is stopped")
}
const changeMe = setTimeout(changeText, 2000)
//here i amusing one button for stop a alert
document.querySelector('#stop-button').addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log("STOPPED")
})

let promiseOne = new Promise(function (resolve, reject) {
    // Async Task/Function
    // Data base calls , network request etc...

    setTimeout(function () {
        console.log('Async task is completed');
        resolve()  //resolve() function/method  use for execute a .then() method.
    }, 1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})


//Other Way..

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()  
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

//-------------------------------------------------------------------

//How to access a data from promise to .then() method.

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
        //In resolve() method we can pass a data. Then we can access in .then() method.
    }, 1000)
})

promiseThree.then(function(user){ // Here user parameter  is data of an  object.
    console.log(user);
    // console.log(`Hello ${user.name}`);    
    //Output:  { username: 'Chai', email: 'chai@example.com' }
})


//-------------------------------------------------------------------

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "XYZ", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
 
//  error = true
//  Output:      
//  ERROR: Something went wrong
//  The promise is either resolved or rejected

//error = false
//Output:
// { username: 'XYZ', password: '123' }
// XYZ
// The promise is either resolved or rejected



// -----------------------------------------------------------------------

let PromiseFive = new Promise(function(resolve , reject){
   setTimeout(function(){
    let error = true
    if(!error){
        resolve({Language: "Java Script",Framework: "react" })
    }else{
        reject("  Error: You failed... ")
    }
   })
})

async function Await_Try_catch(){
    try {
        const response = await PromiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
Await_Try_catch() 
// Output:  Error: You failed...



// -----------------------------------------------------------------------
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

//Same code in .then() and .catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))


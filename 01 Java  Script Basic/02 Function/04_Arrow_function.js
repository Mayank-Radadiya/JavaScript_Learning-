let arrow_function = ()=> {
    console.log("Now start arrow function");
}

let addTwoNum = (num1, num2)=> {console.log(num1 + num2); } 
addTwoNum(1,1)   // 2  


//this is other way to declare arrow function
//  variable = (parameter) =>  (a+b)       no need to write return  function direct return further part
let addNum = (num1,num2)=> (num1+num2)

//  other way    let addNum = (num1,num2)=> num1+num2 

console.log(addNum(1,1)); // 2



let UserName = ()=> ({User:"admin"})
console.log(UserName());    //Output: { User: 'admin' }

let UserName1 = ()=> { return {User:"admin"}}  //here in{} we use return kay word.
 console.log(UserName1());  //Output: { User: 'admin' }


 
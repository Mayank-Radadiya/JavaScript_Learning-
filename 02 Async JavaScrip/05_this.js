var obj1 = {
    Name: "XYZ",
    Age: 20,
    City: "Delhi",
    info: function (){
        console.log(this.Name);
        console.log(this.Age);
        console.log(this.City);
    }
}

obj1.info();
// Output: XYZ
// 20
// Delhi

// This keyword for globe is "window object"
console.log(this);



function user(name){
    console.log(name);
}
user("raj")//this function  we can use  only one time if for other user we use this function , function override the value.
// For multiple user we use "this" key word we use 
// Here is best example...

function Info(name, totalPrice){
    this.name = name
    this.totalPrice = totalPrice
    this.greeting = function(){
        console.log(`Hello ${this.name} and your total price is ${this.totalPrice}`)
    }
}

var user1 = new Info("hitesh", 100)
var user2 = new Info("hitesh", 200)

console.log(user1.greeting());
//Output: Hello hitesh and your total price is 100
console.log(user2.greeting());
//Output: Hello hitesh and your total price is 200
var User = {
    Name: "John",
    Price: 999,

    WelcomeMassage:  function(){
        console.log(`Welcome ${this.Name} your total bill is ${this.Price}$`);
        // console.log(this);
        // {
            //     Name: 'John',
            //     Price: 999,
            //     WelcomeMassage: [Function: WelcomeMassage]
            //   }

    }
       
}
console.log(User.WelcomeMassage());  //Output:Welcome John your total bill is 999$


console.log(this); 
 //Output  in Vs Code:   {}
 //Output   in browser:  Window object.



//in function "this"
function keyWord(){
    console.log(this);
}
keyWord()  //Output:Object [global] .........

function a(){
    let userName = "jon"
    console.log(this.userName);  //"this" keyword work only for an Object. 
    //Output:Undefine
    console.log(`${userName}`);  // Output: jon
}
a()  //Output:Undefine
//            jon
//getOwnPropertyDescriptor use for check where given object all properties we can change or not

// like Math.PI value is 3.14. Check all other property about Math.PI.

// example

console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
// Output:  {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// Here we can't change in Math.Pi value because writable is false.
//same way we can also create our own object where we can select which property we give access to change or not.

//---------------

var UserInfo = {
  name: "Joy",
  age: 20,
  email: "joy12@gmail.com",
}

console.log(Object.getOwnPropertyDescriptor( UserInfo, "name"))
// Output:
//   { value: 'Joy', writable: true, enumerable: true, configurable: true }
// here we can  change this value like writable and other.

Object.defineProperty( UserInfo , "name", {
    writable: false,  // can't change in name value
    enumerable: false  // can't use in loops 
})

UserInfo.name = "XYZ" // Now we try to change in Object name 
console.log(UserInfo);
// Output:
// { name: 'Joy', age: 20, email: 'joy12@gmail.com' }
// name not changed. It's still Joy.


for (let [key , value] of Object.entries(UserInfo)) {
    console.log(`${key} :  ${value}`);
}

// Output:
// age :  20
// email :  joy12@gmail.com
// Can't access name in loop also...
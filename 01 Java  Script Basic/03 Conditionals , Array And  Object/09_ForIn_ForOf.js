
// ForOf:  Use in array. not work on objects.
let arr1 = [1,2,3,4,5,6]
for (const i of arr1) {
    console.log(i);
}//Output: 1, 2, 3, 4, 5, 6

let Name = "User Name"
for (const i of Name) {
    console.log(i);
    
}
//Output:
// U
// s
// e
// r

// N
// a
// m
// e


//for  of loop for object:

let obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
// for (const [key , value] of obj1) {
//     console.log(key);
// } 
// Not work for object only work on Maps....

// ForIn:  Use in object.

for(var key in obj1){
    console.log(key);
} //Output : all keys

for(var key in obj1){
    console.log(obj1[key]);
} //Output :  all keys value

for (const key in obj1) {
    
    console.log(` ${key} :- ${obj1[key]}`);
        
}
//Output :
// a :- 1
// b :- 2
// c :- 3
// d :- 4

// For in loop  for array

let arr2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
for (const key in arr2) {
    console.log(key);
}
//Output: 0 1 2 3 4 5 6 7 8

// for array value:
for(const key in arr2){
    console.log(arr2[key]);
}//Output: a b c d e f g h i
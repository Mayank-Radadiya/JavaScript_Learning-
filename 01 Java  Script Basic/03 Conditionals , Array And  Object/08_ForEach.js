// ForEach: Only use in array.Change in array.but real array will not change.
//  Syntax:

let arr_1 = [1, 2, 3, 4, 5, 6]

arr_1.forEach(element => {
    console.log(element*10);
    
});
//   Output: 10 20 30 40 50 60
// not change in  real array. it will be same
console.log(arr_1);
// output:  [1, 2, 3, 4, 5, 6]


//----------------------------------------------------------------
const coding = ["js", "ruby", "java", "python", "cpp"]
 coding.forEach(function(index){
    console.log(index);
 })  //Output: js  ruby  java   python  cpp

 let j = 0;

 coding.forEach((index) => {
        console.log(`At ${j} Index value is ${index}`); 
        j++; 
 })

// ----------------------------------------------------------------------------
 //other Way:
let i = 0
 function printArray(item){
    console.log(item);
 }
 printArray(coding);  // Output:[ 'js', 'ruby', 'java', 'python', 'cpp' ]
 

 //in forEach loop we  need to  only callback the function
 //we don't need to pass any argument.

 // ex:  codding.forEach(print())   this is wrong way.Only write a function name
 coding.forEach(printArray);  
 //Output: js  ruby  java   python  cpp


 //---------------------------------------------------------
 

 // in ForEach some other parameter
 let Name = ['jon', 'james', 'jemmy' ]

 Name.forEach((item, index, arr) => {
     console.log(item, index, arr);
 })
 // Output:
//  jon 0 [ 'jon', 'james', 'jemmy' ]
// james 1 [ 'jon', 'james', 'jemmy' ]
// jemmy 2 [ 'jon', 'james', 'jemmy' ]


//------------------------------------------------------------------
// Most Useful Case.....

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((item) => {
    console.log(item);  // get all object
}) 
//Output:
//  { languageName: 'javascript', languageFileName: 'js' }
// { languageName: 'java', languageFileName: 'java' }
// { languageName: 'python', languageFileName: 'py' }

myCoding.forEach((item) => {
    console.log(item.languageFileName);  // get all file Name
}) 
//Output: js  java py


//----------------------------------------------------------------
//----------------------------------------------------------------

let NewArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// filter method

let newArr2 = NewArr1.filter( (num) => {
    return num > 4
})
console.log(newArr2); // Output: [ 5, 6, 7, 8, 9 ]

// forEach method instead of filter method.

 NewArr1.forEach( (num) => {
    if (num > 4){
        console.log(num);
    }
}) // Output: 5 6 7 8 9 

//what if i want an array:

let  newArr = [] 
NewArr1.forEach( (num) => {
    if (num > 4){
        newArr.push(num);
    }
})
console.log(newArr); 
//Output:  [ 5, 6, 7, 8, 9 ]



//Map method.......

let  myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNewNum = myNumbers.map( (num) => {
    return num * 2
})
console.log(myNewNum); 
//Output: [2, 4 6 , 8 , 10 ,12, 14, 16, 18, 20]

// For Each same as map method
let Num = []
myNumbers.forEach( (num) => {
    Num.push(num * 2)
})
console.log(Num);
//Output: [2, 4 6 , 8 , 10 ,12, 14, 16, 18, 20]





// let  myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let New_Num =  myNumbers.map((num) => num * 10).map(num => num+1)
console.log(New_Num);
//Output:  [
//   11, 21, 31, 41,  51,
//   61, 71, 81, 91, 101
// ]

let New_Num2 =  myNumbers.map((num) => num * 10).filter(num => num>30)
console.log(New_Num2);
//  output: [
//     40, 50,  60, 70,
//     80, 90, 100
//   ]

// map   =>  return array   operation
// filter  =>  return array condition  check   




// -------------------------------------------------------------------------------
// reduce() method

let reduce_arr = [1, 2, 3, 4]
// 1+ 2+ 3+ 4  
const myTotal = reduce_arr.reduce(function (acc, currentValue) {
    console.log(`acc: ${acc} and currentValue: ${currentValue}`);
    return acc + currentValue
}, 0)
//Output:
// acc: 0 and currentValue: 1
// acc: 1 and currentValue: 2
// acc: 3 and currentValue: 3
// acc: 6 and currentValue: 4
//  10


let sum = reduce_arr.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue
},0 )
console.log(sum);
//Output: 10



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
//Output:  22996

let Total_price = 0
 shoppingCart.forEach( (num) => {
    Total_price+= num.price
})
console.log(Total_price);// 22996


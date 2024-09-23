// Multiply all array element

let arr = [10 ,20 ,30 , 40 ,50]

const NewArr = (arr) => {
    return arr.map(val => (val*2))
}

console.log(NewArr(arr));

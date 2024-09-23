//remove given element form an array

let arr1 = [1,2,3,4,5,2,3,4,3,2,1,3,3,1,3,3]

//remove 3 from an array

const RemoveElementFromArray = (arr , ele) => {
    return arr1.filter(val => val !== ele)
}

console.log(RemoveElementFromArray(arr1 , 3));

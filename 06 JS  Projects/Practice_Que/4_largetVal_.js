//Find largest val

let arr1 = [10, 20, 30, 100, 10000, 50000];

const largestVal = function (arr) {
  return arr.reduce((max, current) => {
     return current > max ? current : max;
  });
};

console.log(largestVal(arr1));

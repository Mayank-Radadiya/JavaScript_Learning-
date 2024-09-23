const factorial = (num) => {
  //   sum = 1;
  //   if (num < 0) {
  //     return console.log("Enter Positive Number");
  //   } else if (num === 0 || num === 1) {
  //     return 1;
  //   } else {
  //     for (let i = 0; i < num; i++) {
  //       sum *= i + 1;
  //     }
  //   }
  //   return sum;

  // Efficient solution using recursion
  if (num < 0) return "Enter Positive Number";
  else if (num === 0 || num === 1) return 1;
  else return num * factorial(num - 1);
};

console.log(factorial(5)); // Output: 120

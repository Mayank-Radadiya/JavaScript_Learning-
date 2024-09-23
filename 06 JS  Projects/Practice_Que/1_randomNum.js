// 

function randomNumber(first, last) {
  return Math.floor(Math.random() * (last - first)) + first;
}

console.log(randomNumber(25, 30));

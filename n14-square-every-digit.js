// Given an integer, your task is to square every digit of it and concatenate them to produce a new integer.


const squareDigits = num => {
  let splitNum = num.toString().split('')
  let newNum = ''
  for (const val of splitNum) {
    let square = val * val
    newNum += square
  }
  return Number(newNum)
};

// Better solution using .map():

// const squareDigits = num => {
//   return Number(
//     num
//       .toString()
//       .split('')
//       .map(ele => ele * ele)
//       .join('')
//   );
// };

console.log(squareDigits(2112)); // 4114
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(9159)); // 8112581
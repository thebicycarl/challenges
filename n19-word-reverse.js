// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces.

// First solution: 
// const spinWords = str => {
//   // Split into individual words
//   let split_array = str.split(' ')

//   // Create a new array, mapping each word fom split array to the new one
//   let new_array = split_array.map((word) => {
//     // Return the word in reverse if it's length is than 5
//     if (word.length >= 5) {
//         return word.split('').reverse().join('')
//     } else {
//         return word
//     }
//   })
//   // Rebuild the string
//   return new_array.join(' ')
//   }

// Second using ternary operator:
const spinWords = str => {
  // Split into individual words
  let split_array = str.split(' ')

  // Create a new array, mapping each word fom split array to the new one
  let new_array = split_array.map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
  // Rebuild the string
  return new_array.join(' ')
  }

console.log(spinWords('This is a test')); // 'This is a test'
console.log(spinWords('Hey fellow warriors')); // 'Hey wollef sroirraw'
console.log(spinWords('This is another test')); // 'This is rehtona test'
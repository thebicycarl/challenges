// Given a non-empty string of words, return the length of the shortest word(s).

const findShort = str => {
  // Your solution
  let word_array = str.split(' ')
  let shortest_length = word_array[0].length
  for (const word of word_array) {
    shortest_length = word.length < shortest_length ? word.length : shortest_length
  }
  return shortest_length
};

console.log(findShort('Test where final word shortest see')); // 3
console.log(findShort('Lets all go on holiday somewhere very cold')); // 2
console.log(findShort('i want to travel the world writing code one day')); // 1

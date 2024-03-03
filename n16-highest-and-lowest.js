// Given a string of space-separated numbers, write a function that returns the highest and lowest numbers. There will always be at least one number in the input string.

const highAndLow = numbers => {
    const chars = numbers.split(' ').map(Number)
    let lowest = chars[0]
    let highest = chars[0]
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] > highest) {
            highest = chars[i]
        } else if (chars[i] < lowest) {
            lowest = chars[i]
        }

    }
    const highAndLow = `${highest} ${lowest}`
    return highAndLow

    // Or could have used Math.max and Math.min
};

console.log(highAndLow('1 2 3 4 5')); // '5 1'
console.log(highAndLow('1 2 -3 4 5')); // '5 -3'
console.log(highAndLow('1 9 3 4 -5')); // '9 -5'
console.log(highAndLow('0 -214 542')); // '542 -214'
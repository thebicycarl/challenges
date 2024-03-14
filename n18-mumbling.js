// Given a string which includes only letters, write a function that produces the outputs below.

// First solution:
// const accum = (str) => {
//     let lower_str = str.toLowerCase()
//     let upper_str = str.toUpperCase()
//     let combined = ''
//     for (let i = 0; i < lower_str.length; i++) {
//         let first_letter = upper_str[i]
//         let lower_block = ''
//         for (let j = 0; j < i; j++) {

//             lower_block += lower_str[i]
        
//         }
//         combined += first_letter + lower_block + '-'
//     }
//     let result = combined.substring(0, combined.length-1)
//     return result
// }

// Second solution using map: 

const accum = (str) => {
    return str
        .split('')
        .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
        .join('-')
}

console.log(accum('abcd')); // 'A-Bb-Ccc-Dddd'
console.log(accum('cwAt')); // 'C-Ww-Aaa-Tttt'
console.log(accum('RqaEzty')); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
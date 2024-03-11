// #1 Check if all characters in a string are unique

let string_1 = 'hellomynameiscarl'
let string_2 = 'abcdefghijklmnopqrstuvwxyz'
let string_3 = 'thequickbrownfoxjumpedoverthelazydog'


// initial solve: 
// const isUnique = (str) => {
//     let letter_count = {}
//     for (let i of str) {
//         letter_count[i] = (letter_count[i] || 0) + 1
//         // console.log(i)
//     }
//     let max_count = 0;
//     for (const [key, value] of Object.entries(letter_count)) {
//         if (value > max_count) {
//             max_count = value;
//         }
//     }
//     return max_count > 1 ? false : true
// }

// second try
const isUnique = (str) => {
    let letter_count = {}
    for (let i of str) {
        let current_value = i
        if (i in letter_count) {
            return false
        }
        letter_count[i] = 1
    }
    return true
}

// console.log(isUnique(string_1))
// console.log(isUnique(string_2))
// console.log(isUnique(string_3))

// #2 given two arrays, sort them into a single, sorted array
arr_1 = [3, 5, 12, 2]
arr_2 = [1, 2, 44, 6, 1]

const sortTwoArrays = (first_array, second_array) => {
    let combined_array = [...first_array, ...second_array]
    combined_array.sort((a, b) => { return a - b })
    return combined_array
}

// console.log(sortTwoArrays(arr_1, arr_2))

// #3 given an array of integers, return an array of all elements that appear twice. You must achieve this with O(n) time complexity

const sample_array = [2, 4, 21, 4, 3, 5, 2, 7, 7, 7]

const appearsTwice = (arr) => {
    let count_obj = {}
    let appears_twice = []
    for (let i = 0; i < arr.length; i++) {
        let current_int = arr[i]
        count_obj[current_int] = (count_obj[current_int] || 0) + 1
    }
    for (const [key, value] of Object.entries(count_obj)) {
        if (value === 2) {
            appears_twice.push(parseInt(key))
        }
    }
    return appears_twice

}

// console.log(appearsTwice(sample_array))

// #4 rotate an array to the right by k steps, where k is non negative

let start_array = [1, 2, 3, 4, 5, 6, 7, 8]  // example: if k = 3, the result is: [4,5,6,1,2,3]

const rotateByK = (arr, k) => {
    let start_slice = arr.slice(0, -k)
    let end_slice = arr.slice(-k)
    let rotated = [...end_slice, ...start_slice]
    return rotated
}
// console.log(rotateByK(start_array, 3))

// #5 given a string of parentheses, determine if it is valid. i.e all open brackets have corresponding closing brackets

let valid_example = '(([]){})'
let invalid_example = '((([()]))){}'
let invalid_start_example = ')[]{}()'

const validParentheses = (str) => {
    // It's valid if every closing brace is preceded by the same number of opening braces

    let brace_count = {}
    let sets = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    let stack = []

    for (const item of str) {
        // if the stack is empty, push the current item to the stack
        if (stack.length === 0) {
            stack.push(item)
            // Every opening brace must have a closing brace after, so every opening must be added to the stack
            // So if the current item is a key in sets, add it to the stack
        } else if (item in sets) {
            stack.push(item)

            // Else the current item is a closing brace, and we should check it against the previous stack entry. 
            // If it is equal to the value in sets of the previous stack entry, we pop it
        } else if (sets[stack[stack.length - 1]] === item) {
            stack.pop()

            // Else we add it to the stack
        } else {
            stack.push(item)
        }

    }
    return stack.length === 0 ? 'valid parentheses' : 'invalid parentheses'

}

console.log(validParentheses(valid_example))
console.log(validParentheses(invalid_example))
console.log(validParentheses(invalid_start_example))
const getMiddle = str => {
    // Given a word, your job is to return the middle character(s) of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
    if (str.length % 2 !== 0) {
        return str[~~(str.length / 2)];
    } else {
        const first = str.length / 2 - 1;
        const second = str.length / 2;
        return str[first] + str[second];
    }
};

console.log(getMiddle('test')); // 'es'
console.log(getMiddle('testing')); // 't'
console.log(getMiddle('middle')); // 'dd'
console.log(getMiddle('A')); // 'A'
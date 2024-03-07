// Given a string which includes only letters, write a function that produces the outputs below.


const accum = str => {
    const lower = str.toLowerCase()
    const upper = str.toUpperCase()
    let built = upper[0]
    let lowerBlock = ''
    for (let i = 0; i < lower.length-1; i++) {
        let upperLetter = upper[i]
        for (let j = 0; j < i; j++) {
            lowerBlock += lower[i]
            built += '-' + upperLetter + lowerBlock
        }

        
    }
    return built

};

console.log(accum('abcd')); // 'A-Bb-Ccc-Dddd'
console.log(accum('cwAt')); // 'C-Ww-Aaa-Tttt'
console.log(accum('RqaEzty')); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
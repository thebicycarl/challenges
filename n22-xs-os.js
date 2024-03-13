// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The input string can contain any character.


const XO = str => {
    let lower_str = str.toLowerCase()
    let xo_obj = {
        x: 0,
        o: 0
    }
    for (const letter of lower_str) {
        xo_obj[letter] += 1
    }

    return xo_obj.x === xo_obj.o


};

console.log(XO('xo')); // true
console.log(XO('Oo')); // false
console.log(XO('xxOo')); // true
console.log(XO('xxxm')); // false
console.log(XO('ooom')); // false
console.log(XO('ty')); // true (when no 'x' and 'o' is present should return true)
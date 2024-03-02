const century = year => {
    if (year % 100 === 0) {
        return year / 100;
    } else {
        for (let i = year; i > year - 100; i--) {
            if (i % 100 === 0) {
                return i / 100 + 1;
            }
        }
    }

};

console.log(century(1705)); // 18
console.log(century(1900)); // 19
console.log(century(1601)); // 17
console.log(century(2000)); // 20
console.log(century(89)); // 1
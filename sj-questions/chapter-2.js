// given an array of numbers, while loop to sum the numbers until the sum is greater than 100

const anArray = [3,4,7,3,2,4,24,23,13,55,9]

const lessThanHundy = () => {
    let sum = 0;
    let i = 0;
    while (i < anArray.length && sum < 100) {
        sum += anArray[i];
        i ++;
        console.log(sum)

    }
} 

lessThanHundy();
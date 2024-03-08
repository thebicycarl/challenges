// Arrow syntax

(input) => { }

const functionExample = (input) => { }

// Ternary operator

const friends = ['Jim', 'Jan', 'John']

const checkFriend = friends[0] === 'Jim' ? true : false // or friends.includes('Jim')

console.log(checkFriend)

// Optional chaining

const hobbies = {
    sports: {
        surfing: {
            fun: 10,
            social: 5,
            ease: 8
        },
        mountainBiking: {
            fun: 10,
            social: 7,
            ease: 4
        }
    }
}

console.log(hobbies?.sports?.basketball?.fun) // Returns undefined instead of an error. Can also us on bracket notation: console.log(hobbies?.[sports]?.basketball?.fun) 

// Object destructuring 

const person = {
    name: 'Carl',
    age: 27,
    height: 189,
    weight: 92,
}

const { name: personName, age, height, weight } = person // Destructures the object into variables for each key, can also rename the variable like has been done for name.

console.log(personName, age, height, weight)

// Array desctructuring

let oldArray = [1, 3, 6]

const [value1, value2, value3] = oldArray // Destructures oldArray into variables, in order of it's index

console.log(value1, value2)

// Template literals
let yourName = 'Jo'
console.log(`Hi ${yourName}. The decimal of 5/8ths is ${5 / 8}`)

// Short circuits && ||

// AND &&

let personDict = { name: 'jimbo' }

let aNumber = personDict.name && 12 // If personDict.name is true (i.e exists), assigns the integer 12 to the variable aNumber
// Equivalent of: 
// if (personDict.name) {
//     let aNumber = 12
// }
console.log(aNumber)

// OR ||

let aName = personDict.name || 'James' // If personDict.name is true, assign it to aName. If false, assign 'James'

console.log(aName)

// Enhanced object literals

let breed = 'GSP'
let petName = 'Rocky'

const myDog = {
    breed,
    petName
}               // JavaScript recognises when a value is not for a key, that it is a variable and searches for the variable to assign the value. 

console.log(myDog)

// Sread operator ...
let demoArray = [1, 2, 3, 4]
let demoArray2 = [...demoArray, 5, 6]  // Spreads the inner values of another array inside new one

let demoObject = {
    favColor: 'blue'
}

let demoObject2 = {
    ...demoObject,
    favFood: 'burgers'
}                           // Spreads inner key value pairs of another object inside new one

// for each

let ultimateArray = [1,5,9,8,18]

// ultimateArray.forEach((myValue, myIndex) => {console.log(`the value at index ${myIndex} is ${myValue}`)})

// map

let aNewArray = ultimateArray.map((currentValue,) => {
    return currentValue * 2
})
// adjusts the values in the array and maps them to a new one. Can also take the index and something else as an argument

// filter

let filteredArray = ultimateArray.filter((curr) => {
    let isEven = curr % 2 === 0;
    return !isEven //filters out the even values in the array
})

// reduce

let reducedArray = ultimateArray.reduce((accumulator, curr, currIndex) => {
    return accumulator + `, ${curr}:${currIndex}` // this example adds the current value and the current index to the accumulator. So what will be returned is a string with all current values and their indexes .
}, '') //Takes a second argument which is the start point of the returned data. In this case it's a string, but can be any valid data type. 




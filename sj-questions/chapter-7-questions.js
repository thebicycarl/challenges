// object destructuring 

let simpleObject = {
    name: 'carl',
    age: 27
}

const {name, age} = simpleObject

// array destructuring 

let simpleArray = ['red', 'green', 'blue']

const [first, second, third] = simpleArray

console.log(first, second, third)

// spread array

let anotherSimpleArray = [1, 2, 3, 4]

const combinedArray = [...simpleArray, ...anotherSimpleArray]

console.log(combinedArray)

// spread object

let anotherSimpleObject = {
    name: 'Sal',
    hobbies: ['surfing','volleyball']
}

const combinedObject = {
    ...simpleObject,
    ...anotherSimpleObject
}

console.log(combinedObject)

// Optional chaining

const streetValue = anotherSimpleObject?.address?.streetValue

console.log(streetValue)

// default arguments

const greet = (name, greeting = 'Hello') => { // assigning a value to an argument when declaring it, gives it that value as a default or backup. 
    console.log(`${greeting}, ${name}`)
}

greet('Carl')

// map

let anArray = [1,2,3,4,5,3,2,455,321,6]

const newArray = anArray.map((value) => value * value)

// console.log (newArray)

// ternary operator
let currentAge = 7

let ageStatus = currentAge >= 18 ? 'adult' : 'minor'

console.log(ageStatus)

// AND

const logMessage = () => {
    console.log('yup')
}

let loggedIn = true

loggedIn && logMessage()

// Or

let users = {
    age: 12
}

let userName = users.name || 'guest'
console.log(userName)

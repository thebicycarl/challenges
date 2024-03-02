
//  2. Object Manipulation: Given an array of objects representing people with names and ages, write a function to find the person with the highest age.

const ageArray = [{ name: 'Carl', age: 27 }, { name: 'Nadia', age: 19 }, { name: 'LogiCarl', age: 82 }]

function oldest(arr) {
    let old = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].age > old.age) {
            old = arr[i]
        }
    }
    return old
}

// const theOldest = oldest(ageArray)
// console.log(theOldest)

const strNum = ['1', '5', '44', '323', '2', '687']

let numArr = []

for (str in strNum) {
    numArr.push(parseInt(str));
}
// console.log(numArr)

const propertyPrices = [{ address: '4 bar beach', price: 500000 }, { address: '25 manly dr', price: 600000 }, { address: 'another', price: 30 }, { address: 'add', price: 25000 }]

// propertyPrices.sort(function(a,b) {
//     return b.price - a.price
// })


function pushPop(arr) {
    // arr.shift()
    // arr.pop()
    return arr.slice(1, arr.length - 1)

}

// console.log(pushPop(propertyPrices))

const shoppingCart = {
    milk: {
        quantity: 4,
        price: 3
    },
    cheese: {
        quantity: 1,
        price: 10
    },
    bread: {
        quantity: 2,
        price: 5
    },
}

// function totalPrice(obj) {
//     let total = 0;
//     const theKeys = Object.keys(obj);
//     for(const key of theKeys) {
//         total += obj[key].quantity * obj[key].price
//     }
//     return total;

// }
function totalPrice(obj) {
    let total = 0;
    for (const key of Object.values(obj)) {
        total += key.quantity * key.price
    }
    return total;

}


// console.log(totalPrice(shoppingCart))

let friends = {
    jim: {
        age: 20,
        hobbies: ['surfing', 'reading']
    },
    james: {
        age: 21,
        hobbies: ['volleyball', 'coding']
    },
    john: {
        age: 22,
        hobbies: ['basketball', 'exploring']
    }
    
}

let friendsBackup = {}

function copyFriends(obj) {
    
    let objectKeys = Object.keys(obj)
    for (const val of objectKeys) {
        friendsBackup[val] = friends[val]
    }
    return friendsBackup;
}
// console.log(copyFriends(friends))

friends.joseph = {isHe: 'no'}

// console.log(friends)

const studentGrades = { 
    math: 8,
    physics: 8,
    economics: 10,
    philosophy: 6,
    coding: 10
}

function avGrade(obj) {
    let objKeys = Object.keys(obj)
    let total = 0;
    for (const score of objKeys) {
        total += obj[score]
    }
    let ave = total / objKeys.length
    return ave 
}

// console.log(avGrade(studentGrades))

let gradesArray = [
    {subject: 'math', grade: 8},
    {subject: 'coding', grade: 10},
    {subject: 'economics', grade: 9}
]
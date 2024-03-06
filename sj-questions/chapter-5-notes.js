class Person {
    constructor(name, age) {
        this.name = name
        this.age = age 
        
    }

    greet() {
        console.log('Hi ' + this.name)
    }
}

class Athlete extends Person {
    constructor(name, age, favSport, pay) {
        super(name, age)
        this.favSport = favSport
        this.pay = pay
    }
}

const carl = new Athlete('Carl', 27, 'Basketball', 'lots')

console.log(carl)
carl.greet()
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    calculateArea() {
        return this.width * this.height
    }
}

const myRectangle = new Rectangle(5, 10)
console.log(myRectangle)

console.log(myRectangle.calculateArea())

class Animal {
    constructor(species) {
        this.species = species
    }
}

class Dog extends Animal {
    constructor(species, name) {
        super(species) 
        this.name = name
    }
}

const myDog = new Dog('GSP', 'Rocky')
console.log(myDog)
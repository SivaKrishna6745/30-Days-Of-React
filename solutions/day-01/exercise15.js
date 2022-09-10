// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    getInfo() {
        return `${this.name} ${this.age} ${this.color} ${this.legs}`;
    }
}
const a = new Animal("dog", 4, "red", 4);
console.log(a);
// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
    constructor(name, age, color, legs) {
        super(name, age, color, legs);
    }
}
class Cat extends Animal {
    constructor(name, age, color, legs) {
        super(name, age, color, legs);
    }
    // Override the method you create in Animal class
    getInfo() {
        return `name:${this.name} age:${this.age} color:${this.color} legs:${this.legs}`;
    }
}

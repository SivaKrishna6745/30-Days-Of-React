// Create an empty object called dog
let dog = {};
// Print the the dog object on the console
console.log(dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog = {
    name: "scooby",
    legs: 4,
    color: "brown",
    age: 5,
    bark: function () {
        return "woof woof";
    },
};
console.log(dog);
// Get name, legs, color, age and bark value from the dog object
console.log(dog.name),
    console.log(dog.legs),
    console.log(dog.color),
    console.log(dog.age),
    console.log(dog.bark());
// Set new properties the dog object: breed, getDogInfo
dog.breed = "labrador";
console.log(dog.breed);
const getDogInfo = () => {
    console.log(
        "Dog name is",
        dog.name,
        "It's color is",
        dog.color,
        "It's breed is",
        dog.breed,
        "it has",
        dog.legs,
        "legs It's age is",
        dog.age,
        "and it sounds like",
        dog.bark()
    );
};
getDogInfo();

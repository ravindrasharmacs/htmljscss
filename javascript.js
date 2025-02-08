let fruits = ["apple", "banana", "orange"];
console.log(fruits);

fruits.splice(1, 1, "grape");
console.log(fruits);

fruits.forEach((fruit , index) => {
    console.log(`Fruit at index ${index} is ${fruit}`)
});

let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Upper case fruits", upperCaseFruits);

let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log("Long fruits", longFruits);

let totalLength = fruits.reduce((sum , fruit) => sum + fruit.length , 0);
console.log("Total length of fruits", totalLength);

let hasShortFruits = fruits.some(fruit => fruit.length < 5);
console.log("Has short fruits", hasShortFruits);

let allLongFruits = fruits.every(fruit => fruit.length > 3);
console.log("All long fruits", allLongFruits);

let firstFruit = fruits.find(fruit => fruit.length > 5);
console.log("First fruit", firstFruit);

let firstLongFruit = fruits.find(fruit => fruit.length > 5);
console.log("First long fruit", firstLongFruit);

let firstLongFruitIndex = fruits.findIndex(fruit => fruit.length > 5);
console.log("First long fruit index", firstLongFruitIndex);

let hasMango = fruits.includes("mango");
console.log("Has mango", hasMango);

let fruitsString = fruits.join(", ");
console.log("Fruits string", fruitsString);

fruits.reverse();
console.log("Reversed fruits", fruits);

fruits.sort();
console.log("Sorted fruits", fruits);

let moreFruits = ['cherry' , 'blueberry'];
let allFruits = fruits.concat(moreFruits);

console.log("All fruits", allFruits);



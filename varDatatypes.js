var oldVar = "old value";
let changeableVar = "changeable value";
const unchangeableVar = "unchangeable value";

console.log(oldVar , changeableVar , unchangeableVar);

let integerVar = 10;
let floatVar = 3.14;
let stringVar = "Hello World";
let booleanVar = true;
let nullVar = null;
let undefinedVar = undefined;
let infinityVar = Infinity;
let negativeInfinityVar = -Infinity;
let nanVar = NaN;

console.log(integerVar, floatVar, stringVar, booleanVar, nullVar, undefinedVar, infinityVar, negativeInfinityVar, nanVar);

//string
let stringVar1 = "Hello World";
let doubleQuotesString = "Hello World";
let singleQuotesString = 'Hello World';
let backtickString = `Hello World`;

console.log(stringVar1, doubleQuotesString, singleQuotesString, backtickString);

let isTrue = true;
let isFalse = false;

console.log(isTrue, isFalse);

// let undefinedVar;
// let nullVar = null;

console.log(undefinedVar, nullVar);

let symbol1 = Symbol("symbol1");
let symbol2 = Symbol("symbol2");


let bigInt = 978989347982793898423894793827042488032049837n;

console.log(bigInt);

let person = {
    name: "John",
    age : 30,
    isStudent: true
}
console.log(person);
let array = [1, 2, 3, 4, 5];
console.log(array);

function greet(name){
    console.log(`Hello ${name}`);
}
greet("John");

let currentDate = new Date();
console.log(currentDate);

let regex = /hello/i;
console.log(regex);

console.log(typeof undefinedVar, typeof nullVar, typeof stringVar, typeof booleanVar, typeof integerVar, typeof floatVar, typeof array, typeof object, typeof function(){});
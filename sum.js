const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateSum(num1, num2) {
    return num1 + num2;
}

rl.question('Enter first number: ', (firstNum) => {
    rl.question('Enter second number: ', (secondNum) => {
        const sum = calculateSum(firstNum, secondNum);
        console.log(`The sum of ${firstNum} and ${secondNum} is ${sum}`);
        rl.close();
    });
});
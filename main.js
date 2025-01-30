/* Import syntax is used with ES6 modules */
import { reverseString } from "./stringUtils.js";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string to reverse: ", (input) => {
    console.log(`Reversed string: ${reverseString(input)}`);
    rl.close();
    });
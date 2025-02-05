/* Import syntax is used with ES6 modules */
import { resolve } from "path";
import { reverseString  } from "./stringUtils.js";
const stringUtils = require("./stringUtils.js");
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string to reverse: ", (input) => {
    console.log(`Reversed string: ${reverseString(input)}`);
    rl.close();
    });

    function getInput(prompt){
        return new Promise((resolve)=>{
            rl.question(prompt,resolve);
        });
    }
    async function main(){
        const string1  = await getInput("Enter a string to add: ");
        const string2  = await getInput("Enter another string to add: ");
        const result = stringUtils.addStrings(string1, string2);
        console.log(`Combined string: ${result}`);
    
        rl.close();
    }
    main();

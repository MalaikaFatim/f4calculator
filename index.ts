#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operator to perfom action",
    type: "list",
    name: "operators",
    choices: ["Addition" , "Subraction" , "Multiplication" , "Division"],
  },
]);

// conditional statement
 if (answer.operator === 'Addition') {
    console.log(answer.firstNumber + answer.secondNumber);
}
 else if(answer.operator === 'Subraction') {
    console.log(answer.firstNumber - answer.secondNumber);
}
 else if  (answer.operator === 'Multiplication') {
    console.log(answer.firstNumber * answer.secondNumber);
}
 else if(answer.operator === 'Division') {
    console.log(answer.firstNumber / answer.secondNumber);
}
 else {
    console.log('pelease seleact valid answer')
 }
   console.log("The end")

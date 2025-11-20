function write(text) {
    process.stdout.write(text);
};

import chalk from "chalk";

write(chalk.blue.bgWhite.strikethrough('hello'));
write(chalk.bgAnsi256(67)('color'));
write(chalk.bgRgb(255, 28, 98)('RGB'));

import inquirer from "inquirer";

let answers = await inquirer.prompt([
{
type: 'input',
name: 'name',
message: 'What is your name?',
},
{
type: 'input',
name: 'age',
message: 'What is your age?',
},
]);


console.log(`Hello ${answers.name}!!!!`);
console.log(`Hello ${answers.age}!!!!`);
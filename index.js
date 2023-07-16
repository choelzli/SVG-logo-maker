const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateShape = require('./lib/generateShape');

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter text for logo (Must not be more than 3 characters).",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a text color.",
    },
    {
        type: "list",
        name: "shape",
        message: "Select a shape for the logo.",
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a shape color."
    }
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

function init() {
inquirer.prompt(questions).then((answers) => {
    if(answers.text.length > 3){
        throw new Error('Text cannot be more than 3 characters')
    } else if(answers.text.length == 0){
        throw new Error("No characters entered.")
    } else {
        const logoToWrite = generateShape(answers);
        writeToFile('./examples/logo.svg', logoToWrite);
    }});
}

init();
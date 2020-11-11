const generateMarkdown = require("./generateMarkdown")
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")


// array of questions for user
const questions = [
{   type: "input",
    name: "title",
    message: "What is the title of your project?"
},
// use the correct order from the readme... order MATTERS   
{
    type: "input",
    name: "description",
    message: "What is the description of your project?"
},

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(response => {
    writeToFile("README.md", generateMarkdown(response))
    })
}

// function call to initialize program
init();

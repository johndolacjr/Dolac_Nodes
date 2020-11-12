const generateMarkdown = require("./generateMarkdown")
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")


// array of questions for user
// use the correct order from the readme... order MATTERS   
const questions = [
{   
    type: "input",
    name: "title",
    message: "What is the title of your project? "
},

{
    type: "input",
    name: "description",
    message: "Write a detailed description of your project: "
},

{
    type: "input",
    name: "installation",
    message: "Enter your installation instructions: "
},

{
    type: "input",
    name: "usage",
    message: "How do users use your application? "
},

{
    type: "input",
    name: "contributing",
    message: "Who all contributed in building your application?"
},

{
    type: "input",
    name: "tests",
    message: "What are the test instructions?"
},

{
    type: "input",
    name: "github",
    message: "What is your GitHub Username:"
},

{
    type: "input",
    name: "email",
    message: "What is your email address?"
},

{
    type: "list",
    name: "license",
    message: "Choose your license:",
    choices: [
        "Apache",
        "Boost Software License 1.0",
        "Eclipse Public License 1.0",
        "GNU GPL v3",
        "IBM Public License Version 1.0",
        "ISC License (ISC)",
        "MIT",
        "None"
    ]
},

// {
//     type: "input",
//     name: "badge",
//     message: "Enter your badge URL here:"
// },

// {
//     type: "",
//     name: "",
//     message: ""
// },

// {
//     type: "",
//     name: "",
//     message: ""
// },

// {
//     type: "",
//     name: "",
//     message: ""
// },

// {
//     type: "",
//     name: "",
//     message: ""
// },

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

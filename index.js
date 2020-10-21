const path = require("path");
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");




// array of questions for user
const questions = [{
    name: "title",
    type: "input",
    message: "please enter project title: "
},
{
    name: "description",
    type: "input",
    message: "please enter project description: "
},
{
    name: "installations",
    type: "input",
    message: "please enter project installations: "
},
{
    name: "usage",
    type: "input",
    message: "please enter project usage: "
},
{
    name: "license",
    type: "list",
    message: "please choose your project license: ",
    choices: ["Mozilla Public License Version 2.0", "Eclipse Public License v1.0", "MIT"]

},
{
    name: "contribution",
    type: "input",
    message: "please enter project contribution: "
},
{
    name: "test",
    type: "input",
    message: "please enter project test instructions: "
},
{
    name: "github",
    type: "input",
    message: "please enter project github profile: "
},
{
    name: "email",
    type: "input",
    message: "please enter project email: "
},


];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)


}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((inquirerResponses) => {
            console.log("generateReadMe...")
            writeToFile("README.md", generateMarkdown({ ...inquirerResponses }))
        })



}

// function call to initialize program
init();

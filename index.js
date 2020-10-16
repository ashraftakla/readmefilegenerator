const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const markdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);


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
    choices: ["Mozilla Public License Version 2.0", "Eclipse Public License v1.0", "MIT License"]

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
async function writeToFile(fileName, data) {
    await writeFileAsync(fileName, data);
}

// function to initialize program
async function init() {
    const userAnswers = await inquirer.prompt(questions);
    const readmeContent = markdown.generateMarkdown(userAnswers);
    console.log(readmeContent);

    writeToFile("filename.md", readmeContent);
}

// function call to initialize program
init();

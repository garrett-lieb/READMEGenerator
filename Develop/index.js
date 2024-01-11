// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please enter a description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Please enter installation instructions for your project.",
        name: "installation",
    },
    {
        type: "input",
        message: "Please enter usage information for your project.",
        name: "usage",
    },
    {
        type: "input",
        message: "Please enter contribution guidelines for your project.",
        name: "contribution",
    },
    {
        type: "input",
        message: "Please enter test instructions for your project.",
        name: "test",
    },
    {
        type: "list",
        message: "Please select a license for your project.",
        name: "license",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "input",
        message: "Please enter your GitHub username.",
        name: "github",
    },
    {
        type: "input",
        message: "Please enter your email address.",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("Success!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile("README.md", generateMarkdown(response));
    });
}

// Function call to initialize app
init();

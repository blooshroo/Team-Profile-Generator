const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamManagerQuestions = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the manager's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the manager's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber"
      }
];

// function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile("team.html",
    render(data),
    (err)=>err? console.log("error") : console.log("Generating HTML..."));
}

// function to initialize program
function init() {
    inquirer.prompt(teamManagerQuestions).then((data) => {
        writeToFile("team.html", data);
    });

}

// function call to initialize program
init();
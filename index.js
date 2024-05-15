// TODO: Include packages needed for this application ✅

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input ✅
const questions = [
    {
      type: 'input',
      message: 'What is the name of your application',
      name: 'siteName',
    },
    {
      type: 'input',
      message: 'give a brief description of your application',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is the process of Instillation',
      name: 'install',
    },
    {
      type: 'input',
      message: 'how would the end user use the application',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Who has contributed to this application',
      name: 'contri',
    },
    {
      type: 'list',
      message: 'What license is being used',
      name: 'license',
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause",
        "BSD 3-Clause",
        "Boost Software License 1.0",
        "Creative Commons Zero 1.0",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
        "None",
        ],
    },
    {
      type: 'input',
      message: 'what tests have been done to this application',
      name: 'test',
    },
    {
      type: 'input',
      message: 'What FAQ questions should be added to this README file',
      name: 'faq',
    },
    {
      type: 'input',
      message: 'What GitHub account should be on the README file',
      name: 'gitHubId',
    },
    {
      type: 'input',
      message: 'What Email should be on the README file',
      name: 'emailId',
    },
  ];

// TODO: Create a function to write README file ✅
function writeToFile(fileName, data) {
  console.log(data);
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app ✅
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile("README.md", generateMarkdown(response));
        }
      );
}

// Function call to initialize app
init();

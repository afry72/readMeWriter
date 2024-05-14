// TODO: Include packages needed for this application ✅

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input ???
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
      type: 'input',
      message: 'What license is being used',
      name: 'license',
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
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(data);
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile("README.md", generateMarkdown(response));
        }
      );
}

// prompt question here

// Function call to initialize app
init();

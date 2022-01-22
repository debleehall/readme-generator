// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generatePage = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'github',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid GitHub username.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What's your email address?",
        name: 'email',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter your email.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What's the title of your project?",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a project name.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a description.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "If applicable, what steps are required to install your project for the Installation section.",
        name: 'install'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributors'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'test'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['MIT', 'GNU'],
        default: ['MIT'],
        name: 'license'
    }
    ]);
};

// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            return console.log(error);
        } else {
            console.log("Succes! Your README file has been created!")
        }
    })
};

// TODO: Create a function to initialize app
questions ()
.then(answers => {
    return generatePage(answers);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err)
})

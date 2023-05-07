// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input

// questions that will be prompted to the user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Project description?",
    },
    {
        type: "input",
        name: "installation",
        message: "Installation Instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "Project Usage",
    },
    {
        type: "input",
        name: "lisence",
        message: "Project License",
    },
    {
        type: "input",
        name: "Contribution",
        message: "Contribution information",
    },
    {
        type: "input",
        name: "Test",
        message: "Test Instructions",
    },
    {
        type: "input",
        name: "questions",
        message: "Any questions?",
    },
];

// TODO: Create a function to write README file

// function to generate markdown for README
class markdown {
    static generateMarkdown(data) {
        return `
        # ${data.title}
        ## Description
        ${data.description}
        ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [contributing](#contributing)
        * [Tests](#tests)
        * [Questions](#questions)

        
        ${data.installation}
        ${data.usage}
        ${data.license}
        ${data.contributing}
        ${data.tests}
        ${data.questions}
        `;    
    }
}

// TODO: Create a function to initialize app

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const response = markdown.generateMarkdown(answers);
        console.log(answers);
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
}

// Function call to initialize app
init();

//import inquirer from 'inquirer';

const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
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
  ]).then((answers) => {


const readmeContent = 

`# ${answers.title}

${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contribution}

## Tests
${answers.test}

## License
This project is licensed under the ${answers.license} license.

## Questions
If you have any questions or issues, please contact me at ${answers.email} or visit my GitHub profile at https://github.com/${answers.username}.`;

fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.error(err) : console.log('README.md created!')
);
});
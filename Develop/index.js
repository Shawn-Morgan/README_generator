const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

//questions for user
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project's title?"
        },
        {
            type: "input",
            name: "description",
            message: "What is your project's description in brief?"
        },
        {
            type: "input",
            name: "installation",
            message: "What install guidance do you have?"
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use."
        },
        {
            type: "checkbox",
            name: "license",
            message: "What license should this be attributed too?",
            choices: [
                "Affero GPL",
                "Artistic License 2.0",
                "BSD 3-Clause License",
                "BSD 2-Clause license",
                "Eclipse Public License v1.0",
                "GPL v3",
                "LGPL v2.1",
                "LGPL v3",
                "Mozilla Public License Version 2.0",
                "Public Domain (Unlicense)",
            ]},
        {
            type: "input",
            name: "contributing",
            message: "How should someone contribute?"
        },
        {
            type: "input",
            name: "githubusername",
            message: "Enter your github username: "
        },
        {
            type: "input",
            name: "email",
            message: "If there are questions, please include e-mail: "
        },
    ]);
}
console.clear();

// function to write README file
function writeReadMe(response) {
    return `
# ${response.title}

# Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Credits](#credits)
- [Questions](#questions)

# Description:
${response.license}
${response.description}

# Installation:
${response.installation}

# Usage:
${response.usage}

# License:
    Click the link below for more information
    - [License](https://opensource.org/licenses/${response.license})

# Contributing:
${response.contributing}

# Test:
    Once installed, issue 'npm run test' in terminal

# Questions:
    Please visit my github page or e-mail me directly to contact me about this project
    - [github](https://github/com/${response.githubusername})
    - ${response.email}
    `;
}

// function to initialize program
async function init() {
    try {
        const response = await promptUser();

        const readMe = writeReadMe(response);

        await writeFileAsync("README.md", readMe);
        console.log("done");
    } catch(err) {
        console.log(err);
    }
}

// function call to initialize program
init();
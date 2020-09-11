const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// array of questions for user
const questions = [
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
        name: "toc",
        message: "What is the table of contents (separate with commas)?"
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
        type: "list",
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
        name: "tests",
        message: "What tests have been conducted?"
    },
    {
        type: "input",
        name: "questions",
        message: "If there are questions, to whom should they reach out too? Enter e-mail"
    },
]
console.clear();


// function to write README file
    //function writeToFile(fileName, data) {
    //}

inquirer.prompt(questions).then(response => {

    fs.appendFileSync("README.md", ("# " + response.title) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync("README.md", ("## Description" + '\n' + response.description) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync("README.md", ("## Table of Contents" + '\n' + '- ' + response.toc.split(", ").
    join('\n' + '- ')) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync("README.md", ("## Install Instructions" + '\n' + response.installation) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync("README.md", ("## Usage" + '\n' + response.usage) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync("README.md", ("## License" + '\n' + response.license) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync("README.md", ("## How to Contribute" + '\n' + response.contributing) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync("README.md", ("## Tests" + '\n' + response.tests) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync("README.md", ('\n' + response.questions + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    }));
});

// function to initialize program
//function init() {
//}

// function call to initialize program
//init();
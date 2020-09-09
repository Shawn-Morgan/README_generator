const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//const writeFileAsync = util.promisify(fs.writeFile);

//ask for input for Title, Description, Table of contents?, installation?, Usage, 
//...License?, contributing, Tests, Questions (?)
//auto generate TOC, installation and license? 

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
            type: "input",
            name: "license",
            message: "What license should this be attributed too?"
        },
        {
            type: "input",
            name: "contributing",
            message: "Who is contributing to your project?"
        },
        {
            type: "input",
            name: "tests",
            message: "What tests have been conducted?"
        },
        {
            type: "input",
            name: "questions",
            message: "If there are questions, to whom should they reach out too?"
        },
    ]);
}

inquirer
    .prompt(questions).then(response => {

    fs.appendFileSync(("README.md", ("# " + response.title) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success");
    });

    fs.appendFileSync(("README.md", ('\n') + response.badge) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync(("README.md", ("## Description") + response.description) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync(("README.md", ("## Table of Contents") + '\n' + response.toc.split) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync(("README.md", ("## Install Instructions") + '\n' + response.installation) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync(("README.md", ("## Usage") + '\n' + response.usage) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync(("README.md", ("## License") + '\n' + response.license) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync(("README.md", ("## How to Contribute") + '\n' + response.contributing) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync(("README.md", ("## Authors") + '\n' + response.authors) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync(("README.md", ("## How to run tests") + '\n' + response.tests) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync(("README.md", ("## Contact Info") + '\n' + "![alt text](" + response.questions1 + ")") + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });

    fs.appendFileSync(("README.md", ('\n' + response.questions2 + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("done");
    });
});

// function generateHTML(answers) {
//     return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//     <p class="lead">I am from ${answers.location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${answers.github}</li>
//       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;
// }

//generate html
// promptUser()
//     .then(function (answers) {
//         const html = generateHTML(answers);

//         return writeFileAsync("index.html", html);
//     })
//     .then(function () {
//         console.log("Successfully wrote to index.html");
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

//generate README.md
promptUser()
    .then(function(answers) {
        const readme = generateREADME.join(answers);

        fs.writeFile("README1.md", readme + "\n").then(function() {
            readFileAsync("README1.md", "utf8").then(function(data) {
                console.log("Successfully wrote to README1.md");
                console.log(data);
            });
        });
    })
    .catch(function (err) {
        console.log(err);
    });
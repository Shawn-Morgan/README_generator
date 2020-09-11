# README Generator
## Summary
This project provides the basic scaffold for generating a generic README.md file for a new project. The purpose for this project is to accerlerate the development of a README.md template that can be updated throughout or at the end of a project. The project uses node.js and through a command line interface allows the user to answer some questions and generate a basic README.md. This outline of the README.md follows best practices. Once the README.md is generated the project team can update it if new information is necessary and fits the unique needs of their project. 

## Links
* [Walk-through video](<iframe src="https://drive.google.com/file/d/1VI2xffD8T0i9z_5-jzXTzPm6d4xY6rsP/preview" width="640" height="480"></iframe>)
* [Sample generated README.md](https://github.com/Shawn-Morgan/README_generator/blob/master/Develop/README.md)
* [Github Repo for project](https://github.com/Shawn-Morgan/README_generator)

## Project Features
* Uses inquirer, fs and util libraries
* Allows user to run command line 'node index.js' command to invoke the generator
* A series of questions are generated in the command line (CLI)
* A README.md file is generated with the information input

## Psuedo Code
Questions include:
* Project title
* Project description
* Installation guidance
* Usage guidance
* License for project selection from list
* Contributing authors and collabortors 
* Github username which then generates a link to that github repo
* For questions, how to contact project leader/team
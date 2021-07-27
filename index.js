const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
var generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'GitHub',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'Title',
            message: "What is your project's title?",
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Write a short description of your project.',
        },
        {
            type: 'list',
            name: 'License',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What command should be run to install dependencies?',
            default: 'npm i',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'What does the user need to know about contributing to the repo?',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'What command should be run to run tests?',
            default: 'npm test',
        },
    ]);
};

// const generateREADME = (answers) =>
//     `# ${answers.Title}`;


    



const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

init();



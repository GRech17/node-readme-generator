// Dependencies needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Links to README template
const ReadMeGenerator = require('./src/ReadMeTemplate');
const ReadMeTemplate = require("./src/ReadMeTemplate");

// Creates a function to write README file
const createFile = util.promisify(fs.writeFile);

//Creates an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'username',
            message:'Enter GitHub username:'
        },
        {
            type:'input',
            name:'Project title',
            message:'What is the project title?'
        },
        {
            type:'input',
            name:'description',
            message:'Describe the project:'
        },
        {
            type:'input',
            name:'installation',
            message:'What are the steps required to install your project?'
        },
        {
            type:'input',
            name:'usage',
            message:'Provide instructions and examples for use. Include screenshots as needed:'
        },
        {
            type:'input',
            name:'credits',
            message:'List your collaborators, if any. If none, leave blank:'
        },
        {
            type:'list',
            name:'license',
            message:'Choose the license for this project:',
            choices: ['GNU AGPL', 'GNU LGPL', 'Mozilla', 'Apache','MIT', 'Boost Software','The Unlicense']
        },
        {
            type:'input',
            name:'features',
            message:'List project features/languages:'
        }
    ])
};



// Create a function to initialize app
async function init() {
    try {
        const data = await promptUser();
        const createContent = ReadMeTemplate(data);

        await createFile('./dist/README.md', createContent);
        console.log('Successfully created README.md');
    } catch(err) {
        console.log(err);
    }
};

// Calls function to initialize app
init();

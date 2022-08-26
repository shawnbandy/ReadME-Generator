const fs = require('fs');
const inq = require('inquirer');

const generateREADME = ({desc, install, usage, license, cont, testInst, username, email}) =>
    `#README

    Table of Contents
        #Description
        #Installation
        #Usage
        #License
        #ContributingGuidelines
        #TestInstructions
        #Questions

    #Description
    ${desc}

    #Installation
    ${install}

    #Usage
    ${usage}

    #License
    ${license}

    #ContributingGuidelines
    ${cont}

    #TestInstructions
    ${testInst}

    #Questions
    Link to GitHub Profile: https://github.com/${username}

    How to contact me:
        Email: ${email}
    `;


inq.prompt([

    {
        name: 'welcome',
        message: 'Welcome to the ReadME Generator.\n You will be prompted for the following information:\nTitle, Description, Installation, Usage, License, Contributing Tests, and Contact Information. Press ENTER to begin.'
    },

    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title'
    },

    {
        type: 'input',
        message: 'What is a description of the project?',
        name: 'desc'
    },

    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'install'
    },

    {
        type: 'input',
        message: 'What are the usage information?',
        name: 'usage'
    },

    {
        type: 'list',
        message: 'Please select the license. Press ENTER to select.',
        choices: ['DogLicense', 'CatLicense', 'BearLicense', 'JackRabbitLicense'],
        name: 'license'
    },

    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'cont'
    },

    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'testInst'
    },

    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },

    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }

    ])
    .then(function(data){
        console.log(data);

        const readMeContent = generateREADME(data)

        const { welcome, title, desc, install, usage, license, cont, testInst, username, email } = data

        const titleElement = title + ".txt"
        
        fs.writeFile(titleElement + '.md', readMeContent, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
        

    });
    
    //*make a function that appends different parts of the readme file

    

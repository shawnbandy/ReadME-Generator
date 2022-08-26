const fs = require('fs');
const inq = require('inquirer');

const generateREADME = ({title, desc, install, usage, cont, testInst, username, email}, license, licimg) =>
`# ${title}

<img src=${licimg}>

## Table of Contents


[Description](#desc)

[Installation](#install)

[Usage](#usage)

[License](#lic)

[ContributingGuidelines](#CG)

[TestInstructions](#TI)

[Questions](#Q)

<a id="desc"></a>
### Description
${desc}

<a name="install"></a>
### Installation
${install}

<a name="usage"></a>
### Usage
${usage}

<a name="lic"></a>
### License
${license}

<a name="CG"></a>
### ContributingGuidelines
${cont}

<a name="TI"></a>
### TestInstructions
${testInst}

<a name="Q"></a>
### Questions
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

        const { welcome, title, desc, install, usage, cont, testInst, username, email } = data
        let { license } = data;

        let licenseImg;
        switch (license){
            case "DogLicense" :
                licenseImg = "/assets/licenseImg/dog.png"
                license += " , this license belongs to our canine friends."
                break;
            case "CatLicense" :
                licenseImg = "/assets/licenseImg/cat.png"
                license += " , this license belongs to our feline friends."
                break;
            case "BearLicense" :
                licenseImg = "/assets/licenseImg/bear.png"
                license += " , this license belongs to Yogi and company."
                break;
            case "JackRabbitLicense" :
                licenseImg = "/assets/licenseImg/rabit.png"
                license += " , this license belongs to our hopping friends."
                break;
            default :
                licenseImg = "/assets/licenseImg/dog.png"
                license += " , this license belongs to our canine friends. This was chosen for the default licensing as none was selected."
                break;
        }

        const usageImg = "/assets/licenseImg/"

        const readMeContent = generateREADME(data, license, licenseImg)

        const titleElement = title 
        
        fs.writeFile("./Result/" + titleElement + '.md', readMeContent, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
        

    });
    

    

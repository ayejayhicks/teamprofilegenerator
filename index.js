const Manager = require("./templates/manager.js");
const Intern = require("./templates/intern");
const Engineer = require("./templates/engineer");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// var Prompt = require("prompt-expand");
// const htmlHelper = require("./htmlHelper");
// const writeFileAsync = util.promisify(fs.writeFile);

// every time we create a new employee, push to our employees array
const employee = [];
let html = ''

// Creates a function to write README file
function writeToFile(fileName) {
    fs.writeFile(filename, html, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
}
// const writeFileAsync = promisify(fs.writeFile);

// This prompts for employee input
function initial() {
    console.log("Employee Management Portal");
    console.log("Please Create a Profile");
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your Name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your Employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your Email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your Office Number?",
            name: "officenumber"
        },
    ])
    // gathers the data to create the html after user input
    .then(function (managerData) {
        console.log(managerData)
        // use our managerData to create a new Manager() and push that to our employees array
        //
        return addNewEmployee();
    })

    .catch(function (err) {
        console.log(err);
    });
}
console.log('before initial')
initial()

// our function that will prompt the user to either...
// 1. add an engineer
// 2. add an intern
// 3. finish building the team
function addNewEmployee ( ) {
    return inquirer.prompt([
        {
            type: "list",
            message: "Who would you like to add to your Team?",
            name: "newmember",
            choices: ['Engineer', 'Intern', 'Finish building my Team']
        }
    ])
    .then( response => {
        console.log(response.newmember);
        if (response.newmember == 'Engineer') {
            return promptEngineerInfo();
        } else if (response.newmember == 'Intern') {
            return promptInternInfo();
        } else if (response.newmember == 'Finish building my Team') {
            return writeToFile("./dist/index.html");
        }
    })
}

// our function that will prompt the user to add an intern's school
function promptInternInfo () {
    return inquirer.prompt ([
        // we also need to add questions for name, email, id
        {
            type: "input",
            message: "What is your Intern's Name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your Intern's employee ID?",
            name: "ID"
        },
        {
            type: "input",
            message: "What is your Intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "Where did your Intern go to school?",
            name: "school"
        },
    ]).then(internInfo => {
        html += intern(internInfo)
        console.log(internInfo);
        addNewEmployee()
    });
}

// our function that will prompt the user to add an Engineer's github username
function promptEngineerInfo() {
    return inquirer.prompt ([
        {
            type: "input",
            message: "What is your Engineer's Name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your Engineer's employee ID?",
            name: "ID"
        },
        {
            type: "input",
            message: "What is your Engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "Where is your Engineer's github username?",
            name: "github"
        },
    ]).then(engineerInfo => {
        html += engineer(engineerInfo)
        console.log(engineerInfo);
        //1. use engineerInfo to create a new Engineer() and push it to our employees array
        addNewEmployee();
    })
}
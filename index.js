const Manager = require("./templates/manager");
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
let openhtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="style.css">
    <title>Employee Management Portal</title>
   
</head>

<style>
.row {
display: flex;
justify-content: center;
justify-content: space-evenly;
margin: 100px;
}
.card-header {
background-color: rgb(6, 73, 161);
}
</style>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">My Team</h1>
  </div>
</div>

<div class="row">
<div class="card text-dark bg-light mb-3" style="max-width: 18rem;" text-align="center">
    <div class="card-header"></div>
    <div class="card-header"></div>
    <div class="card-body">
        <p class="card-text"></p>
        <p class="card-text"></p>
        <p class="card-text"></p>
    </div>
</div>
<div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header"></div>
    <div class="card-header"></div>
    <div class="card-body">
        <p class="card-text"></p>
        <p class="card-text"></p>
        <p class="card-text"></p>
    </div>
</div>
<div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header"></div>
    <div class="card-header"></div>
    <div class="card-body">
        <p class="card-text"></p>
        <p class="card-text"></p>
        <p class="card-text"></p>
    </div>
</div>
</div>
<div class="row">
<div class="card text-dark bg-light mb-3" style="max-width: 18rem;" text-align="center">
    <div class="card-header"></div>
    <div class="card-header"></div>
    <div class="card-body">
        <p class="card-text"></p>
        <p class="card-text"></p>
        <p class="card-text"></p>
    </div>
</div>
<div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header"></div>
    <div class="card-header"></div>
    <div class="card-body">
        <p class="card-text"></p>
        <p class="card-text"></p>
        <p class="card-text"></p>
        <script src="code.js"></script>
<body>`

let closehtml = `
<h3> This completes my team with the members needed. </h3>
</div>
</div>
</body>
</html>`

// Creates a function to write README file
function writeToFile(filename) {
    fs.writeFile(filename, openhtml += html += closehtml, function (err) {

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
        .then(function (managerInfo) {
            console.log('MANAGER INFOR LINE 143', managerInfo)
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
function addNewEmployee() {
    return inquirer.prompt([
        {
            type: "list",
            message: "Who would you like to add to your Team?",
            name: "newmember",
            choices: ['Engineer', 'Intern', 'Manager', 'Finish building my Team']
        }
    ])
        .then(response => {
            console.log(response.newmember);
            if (response.newmember == 'Engineer') {
                return promptEngineerInfo();
            } else if (response.newmember == 'Intern') {
                return promptInternInfo();
            } else if (response.newmember == 'Manager') {
                return promptManagerInfo();
            } else if (response.newmember == 'Finish building my Team') {
                return writeToFile("./dist/index.html");
            }
        })
}

function promptManagerInfo() {
    return inquirer.prompt([
        // we also need to add questions for name, email, id
        {
            type: "input",
            message: "What is your Manager's Name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your Manager's employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your Manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your Manager's office number?",
            name: "officeNumber"
        },
    ]).then(answer => {

        console.log('ANSWER--->', answer)
        let manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber)
       // employee.push(manager)
        console.log('MANAGER-->', manager)
        addNewEmployee();
      
    });
}

// our function that will prompt the user to add an intern's school
function promptInternInfo() {
    return inquirer.prompt([
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
    ]).then(answer => {
        console.log('ANSWER ---> ', answer)
        let intern = new Intern (answer.name, answer.id, answer.email, answer.school)
        // employee.push(intern)
        console.log('INTERN --->', intern)
        addNewEmployee();
    });
}

// our function that will prompt the user to add an Engineer's github username
function promptEngineerInfo() {
    return inquirer.prompt([
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
    ]).then(answer => {
        console.log('ENGINEER --->', answer)
        let engineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
        // employee.push(engineerInfo)
        console.log('ENGINEER --->', engineer)
        //1. use engineerInfo to create a new Engineer() and push it to our employees array
        addNewEmployee();
    })
}
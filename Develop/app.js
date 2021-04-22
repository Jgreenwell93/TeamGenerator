const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");




//Global variables
const employees = [];


//Inquirer Questions 

//Prompts user if they wish to add an employee. 
//If no, page is rendered.
//If yes, calls employeeRole
const addNewEmployee = () => {
    inquirer
        .prompt(wantNewEmp)
        .then(({ newMember }) => {
            switch (newMember) {
                case 'Add':
                    employeeRole()
                    break;
                case 'Done!':
                    fs.writeFile(outputPath, render(employees), (err) => {
                        err ? console.error(err) : console.log('Success!')})
                    break;
            }
        })
}


//Questions that start initialization and after employee object is created
const wantNewEmp = [
    {
        type: 'list',
        message: 'Add new employee?',
        name: 'newMember',
        choices: ['Add', 'Done!',]
    },
]

//Role question (What subclass of Employee to create)
const roleQuestion = [
    
    {
        type: 'list',
        message: 'Employee role?',
        name: 'role',
        choices: ['Manager','Engineer','Intern']
    },
    
]

//Asks user what type of employee they wish to add 
//(Manager, Engineer, Intern)

const employeeRole = () => {
    inquirer
        .prompt(roleQuestion)
        .then(({ role }) => {
            switch (role) {
                case 'Manager':
                    return addManager()
                    break;
                case 'Engineer':
                    return addEngineer()
                    break;
                case 'Intern':
                    return addIntern()
                    break;
            }
        })
}

//Manager Questions
const managerQuestions = [
    {
        type: 'input',
        message: 'Name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'ID?:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Office Number?',
        name: 'officeNumber',
    }
]

//Engineer Questions
const engineerQuestions = [
    {
        type: 'input',
        message: 'Name?:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'ID?:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'GitHub Username?:',
        name: 'github',
    }
]


//Intern Questions
const internQuestions = [
    {
        Type: 'input',
        Message: 'Name?:',
        name: 'name',
    },
    {
        Type: 'input',
        Message: 'ID?:',
        name: 'id',
    },
    {
        Type: 'input',
        message: 'Email?:',
        name: 'email',
    },
    {
        Type: 'input',
        message: 'School?:',
        name: 'school',
    },
]




//functions (addManager, addEngineer, addIntern) prompt role specific questions ,
//push the object to the employees array and callback the addNewEmployee function again. 

const addManager = () => {
    console.log(`\nManager selected!`)
    inquirer
        .prompt(managerQuestions)
        .then(({ name, id, email, officeNumber }) => {
            const mailTo=`<a href="mailto:${email}">${email}</a>`
            console.log(`\nManager Added!\nName: ${name} \nID: ${id}\nEmail: ${email} \nOffice Number: ${officeNumber}\n`);
            const manager = new Manager(name, id, mailTo, officeNumber)
            employees.push(manager)
            addNewEmployee();
        })
        
}

const addEngineer = () => {
    console.log(`\nEngineer selected!`)
    inquirer
        .prompt(engineerQuestions)
        .then(({name, id, email, github }) => {
            const mailTo=`<a href="mailto:${email}">${email}</a>`
            gitUrl = `<a href="https://github.com/${github}">${github}</a>`;
            console.log(`\nEngineer Added!\nName: ${name} \nID: ${id}\nEmail: ${email} \nGitHub: ${github}\n`);
            const engineer = new Engineer(name, id, mailTo, gitUrl)
            employees.push(engineer)
            addNewEmployee();
        })
}

const addIntern = () => {
    console.log(`\nIntern selected!`)
    inquirer
        .prompt(internQuestions)
        .then(({ name, id, email, school }) => {
            const mailTo=`<a href="mailto:${email}">${email}</a>`
            console.log(`\nIntern Added!\nName: ${name} \nSchool: ${school}\n`);
            const intern = new Intern(name, id, mailTo, school)
            employees.push(intern)
            addNewEmployee();

            
        })
}


const init = () => {
    addNewEmployee();
}

init();

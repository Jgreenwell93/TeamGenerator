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

//Prompts user if they wish to add an employee. 
//If no, page is rendered.
//If yes, calls employeeRole

//Asks user what type of employee they wish to add 
//(Manager, Engineer, Intern)

//functions (addManager, addEngineer, addIntern) prompt role specific questions ,
//push the object to the employees array and callback the addNewEmployee function again. 

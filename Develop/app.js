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

//Inquirer Questions 

//Questions that start at initialization and after employee object is created

//Role question (What subclass of Employee to create)

//Intern Questions

//Engineer Questions

//Manager Questions

//Prompts user if they wish to add an employee. 
//If no, page is rendered.
//If yes, calls employeeRole

//Asks user what type of employee they wish to add 
//(Manager, Engineer, Intern)

//functions (addManager, addEngineer, addIntern) prompt role specific questions ,
//push the object to the employees array and callback the addNewEmployee function again. 

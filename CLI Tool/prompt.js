// const  inquirer = require('inquirer');
import inquirer from 'inquirer';

inquirer
  .prompt([
    {
        type: "input",
        name: "firstname",
        message: "Customer first name"
    },
    {
        type: "input",
        name: "lastname",
        message: "Customer last name"
    },
    {
        type: "input",
        name: "phone",
        message: "Customer phone "
    },
    {
        type: "input",
        name: "email",
        message: "Customer email address"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
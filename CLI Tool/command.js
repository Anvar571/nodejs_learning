import { Command } from 'commander';
const program = new Command();

import inquirer from "inquirer";

// const prompt = inquirer.prompt();
import {addCustomer, findCustomer} from "./index.js";

// question
const question = [
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
    },
]

program
    .version("1.0.0")
    .description('Client Management System')

// program
//     .command("add <firstname> <lastname> <phone> <email>")
//     .alias("a")
//     .description("Add a customer")
//     .action((firstname, lastname, phone, email) => {
//         addCustomer({firstname, lastname, phone, email})
//     })

program
    .command("add")
    .alias('a')
    .description("Add a customer")
    .action(() => {
        inquirer.prompt(
            [
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
                },
            ]
            
        ).then(answers => addCustomer(answers));
    })

program
    .command("find <name>")
    .alias("f")
    .description("Find a customer")
    .action(name => findCustomer(name));

program.parse(process.argv);
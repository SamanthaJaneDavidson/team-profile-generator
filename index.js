const inquirer = require(`inquirer`);
const fs = require(`fs`);
const engineer = require(`./lib/engineer`)
const employee = require(`./lib/employee`)
const intern = require(`./lib/intern`)
const manager = require(`./lib/manager`)

let employeeList = [];

const addEmployee = () => {
inquirer.prompt([
{
    type: "input",
    name: "employeeName",
    message: "What is the employee's name?",
}
{
    type: "input",
    name: "employeeName",
    message: "What is the employee's name?",
}
{
    type: "input",
    name: "employeeName",
    message: "What is the employee's name?",
}
]
)
.then(answers => {
    employeeList.push({

    })
    console.log(answers);
    menu();
})
}

const print = () => {
    console.log("printing");
    return menu();
}

const exit = () => {
    console.log("Byyyye");
    return; 
}


function menu (){
return inquirer.prompt([
    {
    type: "list",
    message: "Choose an option",
    choices: ["Add an employee", "Print", "Exit"]
    }
])
.then( ({option}) => {
    switch(option){
        case "Add an employee":
            return addEmployee();
        case "Print":
            return print();
        case "Exit":
            return exit(); 
    }
})
}

menu();
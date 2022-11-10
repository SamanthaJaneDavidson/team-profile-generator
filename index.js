const inquirer = require(`inquirer`);
const fs = require(`fs`);

let employeeList = [];

const addEmployee = () => {
inquirer.prompt([
{
    type: "input",
    name: "managerName",
    message: "What is the team manager's name?",
},
{
    type: "input",
    name: "employeeId",
    message: "What is the employee ID?",
},
{
    type: "input",
    name: "employeeEmail",
    message: "What is the employee email address?",
},
{
    type: "input",
    name: "employeeOffice",
    message: "What is the employee office number?",
},
]
)
.then(answers => {
    employeeList.push;
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
});
}

menu();
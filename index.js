const inquirer = require(`inquirer`);

const employeeLIst = [];

const addEmployee = () => {
inquirer.prompt([
{
    type: "list",
    name: "employeeName",
    message: "What is the employee's name?",
}
]
)
.then(answers => {
    //add box to list 
    console.log(answers);
    menu();
})
}

const print = () => {
    console.log("printing");
    return menu();
}

const endProgram = () => {
    console.log("Byyyye");
    return; 
}


function menu (){
return inquirer.prompt([
    {
    type: "list",
    message: "Choose an option",
    choices: []
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
const inquirer = require(`inquirer`);
const fs = require(`fs`);

let employeeList = [];

const addEmployee = () => {

`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <title>Team Profiles</title>
</head>
<body>
    <header>My Team</header>  
    <section>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${managerName} || ${employeeName}</h5> // Can I do this?????? 
            <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
            <ul class="card-text">
                <li>${id}</li> 
                <li>${email}</li> 
                <li>${officeNumber}</li> 
                <li>${gitHub}</li> 
                <li>${school}</li> 
            </ul>
            </div>
        </div>
    </section>
</body>
</html>`

inquirer.prompt([
{
    type: "input",
    name: "managerName", //the directions here don't make sense to me 
    message: "What is the team manager's name?",
},
{
    type: "input",
    name: "id",
    message: "What is the employee ID?",
},
{
    type: "input",
    name: "email",
    message: "What is the employee email address?",
},
{
    type: "input",
    name: "officeNumber",
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
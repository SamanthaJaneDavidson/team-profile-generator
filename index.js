const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Manager = require("./lib/manager");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const path = require(`path`);

let employeeList = [];

addManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
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
    ])

        .then(answers => {
            const newManager = new Manager(answers.managerName, answers.id, answers.email, answers.officeNumber)
            employeeList.push(newManager);
            console.log(answers);
            menu();
        })
};

function menu() {
    return inquirer.prompt([
        {
            type: "list",
            name: "mainMenu",
            message: "Choose an option",
            choices: ["Add an employee", "Print", "Exit"]
        }
    ])
        .then((answers) => {
            switch (answers.mainMenu) {
                case "Add an employee":
                    return addEmployee();
                case "Print":
                    return print();
                case "Exit":
                    return exit();
            }
        });
}

addEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "Select an employee type?",
            choices: ["Engineer", "Intern"],
        }])
        .then(answers => {
            if ("Engineer" === answers.employeeType) {
                addEngineer()
            }
            else {
                addIntern()
            }
        })
}


addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?",
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is the engineer's GitHub username'?",
        },
    ])

        .then(answers => {
            const newEngineer = new Engineer(answers.engineerName, answers.id, answers.email, answers.gitHub)
            employeeList.push(newEngineer);
            console.log(answers);
            menu();
        })
};

addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?",
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school'?",
        },
    ])

        .then(answers => {
            const newIntern = new Intern(answers.internName, answers.id, answers.email, answers.school)
            employeeList.push(newIntern);
            console.log(answers);
            menu();
        })
};


const generateList = () => {
    console.log(employeeList);
    let teamList = ``;
    employeeList.map(employee => {
        if (employee.getRole() === "Manager") {
            teamList += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                    <ul class="card-text">
                        <li>${employee.id}</li> 
                        <li>${employee.email}</li> 
                        <li>${employee.getOfficeNumber()}</li> 
                    </ul>
                </div>
            </div>`}
        else if (employee.getRole() === "Engineer") {
            teamList += `
            <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                    <ul class="card-text">
                        <li>${employee.id}</li> 
                        <li>${employee.email}</li> 
                        <li>${employee.getGitHub()}</li> 
                    </ul>
                </div>
            </div>`}
        else if (employee.getRole() === "Intern") {
            teamList += `
            <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                    <ul class="card-text">
                        <li>${employee.id}</li> 
                        <li>${employee.email}</li> 
                        <li>${employee.getSchool()}</li> 
                    </ul>
                </div>
            </div>`}
        console.log(employee.name)
    })
    return teamList;
}

const generateHTML = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
    <title>Team Profiles</title>
    <style>
        header {
            text-align: center;
            background-color: blueviolet;
            color: white;
            font-weight: bold;
            font-size: x-large;
            height: 50px;
        }
    </style>
    </head>
    <body>
        <header>My Team</header>  
        <section id="team">
            ${generateList()}
        </section>
    </body>
    </html>`
}

const print = () => {
    const data = generateHTML();
    fs.writeFile(path.basename("/dist/employee-list.html"), data, () => {
    })
    return menu();
}

const exit = () => {
    console.log("Byyyye");
    return;
}

addManager();
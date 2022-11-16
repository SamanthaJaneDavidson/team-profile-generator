// Required modules and classes 
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Manager = require("./lib/manager");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const path = require(`path`);

let employeeList = [];

// Function to add manager information 
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
            menu();
        })
};

// Function to prompt manager to add a new employee, print, or exit 
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

// Function to choose employee type to enter
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

// Function to add enginner 
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
            menu();
        })
};

// Function to add an intern 
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
            menu();
        })
};

// Function to generate the list of employees from the information entered in the inquirer prompts, using specific HTML elements 
const generateList = () => {
    let teamList = ``;
    employeeList.map(employee => {
        if (employee.getRole() === "Manager") {
            teamList += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${employee.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                    <ul class="card-text">
                        <li> ID: ${employee.id}</li> 
                        <li><a href="mailto:${employee.email}">Email</a></li> 
                        <li> Office Number: ${employee.getOfficeNumber()}</li> 
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
                        <li> ID: ${employee.id}</li> 
                        <li><a href="mailto:${employee.email}">Email</a></li> 
                        <li><a href="www.github.com/${employee.getGitHub()}">GitHub</a></li> 
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
                        <li> ID: ${employee.id}</li> 
                        <li><a href="mailto:${employee.email}">Email</a></li> 
                        <li> School: ${employee.getSchool()}</li> 
                    </ul>
                </div>
            </div>`}
    })
    return teamList;
}

// Function to generate the HTML file with team information 
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
    </head>
    <body>
        <header>My Team</header>  
        <section id="team">
            ${generateList()}
        </section>
    </body>
    </html>`
}

// Function to print the HTML file 
const print = () => {
    const data = generateHTML();
    fs.writeFile(path.basename("./dist/employee-list.html"), data, () => {
    })
    return menu();
}

// Funtion to exit the program 
const exit = () => {
    console.log("Goodbye");
    return;
}

// Initial add manager call 
addManager();
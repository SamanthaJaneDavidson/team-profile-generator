const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Manager = require("./lib/manager");

let employeeList = [];

// `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
//   <link rel="stylesheet" href="style.css">
//   <title>Team Profiles</title>
//   <style>
//     header {
//         text-align: center;
//         background-color: blueviolet;
//         color: white;
//         font-weight: bold;
//         font-size: x-large;
//         height: 50px;
//     }
//   </style>
// </head>
// <body>
//     <header>My Team</header>  
//     <section>
//         <div class="card" style="width: 18rem;">
//             <div class="card-body">
//             <h5 class="card-title">${managerName} || ${employeeName}</h5> // Can I do this?????? 
//             <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
//             <ul class="card-text">
//                 <li>${id}</li> 
//                 <li>${email}</li> 
//                 <li>${officeNumber}</li> 
//                 <li>${gitHub}</li> 
//                 <li>${school}</li> 
//             </ul>
//             </div>
//         </div>
//     </section>
// </body>
// </html>`

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


addEmployee = () => {
    inquirer.prompt([ 
    {
        type: "list",
        name: "employeeType",
        message: "Select an employee type?",
        choices: ["Engineer", "Intern"],
}])
.then(answers => {
    if("Engineer" === answers.employeeType) {
        addEngineer()
    }
    else { addIntern()
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
            employeeList.push(newEngineer);
            console.log(answers);
            menu();
        })
};


const print = () => {
    console.log(employeeList);
    let employeeList = "";
    employeeList.map() //look at what Anthony did in 00 index file - gotta put a for loop or something like that in here 
    //add html here? 
    fs.writeFile("employee-list.html", data, (err) => {
        err ? console.log(err) : console.log("Output complete")
    })
    return menu();
}

const exit = () => {
    console.log("Byyyye");
    return;
}


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

// menu();

addManager();
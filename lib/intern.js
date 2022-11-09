const Employee = require("./employee");

class Intern extends Employee{
    getEmployeeName(){
        return "Intern"
    }
}

module.exports = Intern; 
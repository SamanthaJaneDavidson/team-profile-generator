const Employee = require("./employee");

class Engineer extends Employee{
    getEmployeeName(){
        return "Engineer"
    }
}

module.exports = Engineer; 
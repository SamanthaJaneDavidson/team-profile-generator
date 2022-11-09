const Employee = require("./employee");

class Manager extends Employee{
    getEmployeeName(){
        return "Manager"
    }
}

module.exports = Manager; 
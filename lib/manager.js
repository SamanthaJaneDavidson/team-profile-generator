const Employee = require("./employee");

class Manager extends Employee{
    constructor(id, officeNumber) {
    
        super(id, officeNumber);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        console.log(this.officeNumber)
    }
    }

    let role = Manager 

    manager.getId();
    manager.getName();
    manager.getEmail();
    manager.getOfficeNumber();
    manager.getRole();


module.exports = Manager; 
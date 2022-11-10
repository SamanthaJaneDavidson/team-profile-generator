class Employee{
    constructor(id, name, email) {
        this.id = id; 
        this.name = name;
        this.email = email;
}

getId() {
    console.log(this.id)
}

getName() {
    console.log(this.name)
}

getEmail() {
    console.log(this.email)
}
}

let role = Employee;

getRole() {
    console.log(this.role)
}

module.exports = Employee; 
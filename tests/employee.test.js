const Employee = require("../lib/employee");

describe(`employee`, () => {
    it("should return employee name, id, email, role", () => {
        
    const obj = new Employee;

    expect("name" in obj).toEqual(true);
    expect("id" in obj).toEqual(true);
    expect("email" in obj).toEqual(true);
    expect("role" in obj).toEqual(Employee);
});
});
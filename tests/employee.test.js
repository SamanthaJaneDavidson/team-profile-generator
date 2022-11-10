const Employee = require("../lib/employee");

describe(`employee`, () => {
    it("should return employee name", () => {
        
    const obj = new Employee("123", "Sam", "Sam@test.com");

    expect(obj.name).toEqual("Sam");
 
});
});

describe(`employee`, () => {
    it("should return employee id", () => {
        
    const obj = new Employee;

    expect("id" in obj).toEqual(true); ///do what you did above
});
});

describe(`employee`, () => {
    it("should return employee email", () => {
        
    const obj = new Employee;

    expect("email" in obj).toEqual(true);

});
});

describe(`employee`, () => {
    it("should return employee role", () => {
        
    const obj = new Employee;

    expect("role" in obj).toEqual(true);
});
});

//need to add tests for the indiviudal functions 
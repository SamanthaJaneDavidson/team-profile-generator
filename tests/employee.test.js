const Employee = require("../lib/employee");

describe(`employee`, () => {
    it("should return employee name", () => {
        
    const obj = new Employee("123", "Sam", "Sam@test.com");

    expect(obj.name).toEqual("Sam");
 
});
});

describe(`employee`, () => {
    it("should return employee id", () => {
        
    const obj = new Employee("123", "Sam", "Sam@test.com");

    expect(obj.id).toEqual("123");
});
});

describe(`employee`, () => {
    it("should return employee email", () => {
        
    const obj = new Employee("123", "Sam", "Sam@test.com");

    expect(obj.email).toEqual("Sam@test.com");

});
});

describe(`employee`, () => {
    it("should return employee role", () => {
        
    const obj = new Employee("Employee");

    expect(obj.getRole()).toEqual("Employee");
});
});

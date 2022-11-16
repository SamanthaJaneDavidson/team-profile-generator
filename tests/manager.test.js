const Manager = require("../lib/employee");

describe(`manager`, () => {
    it("should return employee name", () => {
        
    const obj = new Manager("321", "Ariel", "Ariel@test.com");

    expect(obj.name).toEqual("Ariel");
 
});
});

describe(`manager`, () => {
    it("should return employee id", () => {
        
    const obj = new Manager("321", "Ariel", "Ariel@test.com");

    expect(obj.id).toEqual("321");
});
});

describe(`manager`, () => {
    it("should return employee email", () => {
        
    const obj = new Manager("321", "Ariel", "Ariel@test.com");

    expect(obj.email).toEqual("Ariel@test.com");

});
});

describe(`manager`, () => {
    it("should return employee role", () => {
        
    const obj = new Manager("321", "Ariel", "Ariel@test.com");

    expect(obj.getRole()).toBe("Manager");
});
});

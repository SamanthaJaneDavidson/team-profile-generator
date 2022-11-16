const Engineer = require("../lib/employee");

describe(`engineer`, () => {
    it("should return employee name", () => {
        
    const obj = new Engineer("456", "Dan", "Dan@test.com");

    expect(obj.name).toEqual("Dan");
 
});
});

describe(`engineer`, () => {
    it("should return employee id", () => {
        
    const obj = new Engineer("456", "Dan", "Dan@test.com");

    expect(obj.id).toEqual("456");
});
});

describe(`engineer`, () => {
    it("should return employee email", () => {
        
    const obj = new Engineer("456", "Dan", "Dan@test.com");

    expect(obj.email).toEqual("Dan@test.com");

});
});

describe(`engineer`, () => {
    it("should return employee role", () => {
        
    const obj = new Engineer("456", "Dan", "Dan@test.com");

    expect(obj.getRole()).toEqual("Engineer");
});
});

//need to add tests for the indiviudal functions 
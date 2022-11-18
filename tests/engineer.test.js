const Engineer = require("../lib/engineer");

describe(`engineer`, () => {
    it("should return employee name", () => {
        
    const obj = new Engineer("Dan", "456", "Dan@test.com");

    expect(obj.name).toEqual("Dan");
 
});
});

describe(`engineer`, () => {
    it("should return employee id", () => {
        
    const obj = new Engineer("Dan", "456", "Dan@test.com");

    expect(obj.id).toEqual("456");
});
});

describe(`engineer`, () => {
    it("should return employee email", () => {
        
    const obj = new Engineer("Dan", "456", "Dan@test.com");

    expect(obj.email).toEqual("Dan@test.com");

});
});

describe(`engineer`, () => {
    it("should return employee role", () => {
        
    const obj = new Engineer("Dan", "456", "Dan@test.com");

    expect(obj.getRole()).toEqual("Engineer");
});
});

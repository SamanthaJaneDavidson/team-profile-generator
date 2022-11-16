const Intern = require("../lib/employee");

describe(`intern`, () => {
    it("should return employee name", () => {
        
    const obj = new Intern("789", "Bill", "Bill@test.com");

    expect(obj.name).toEqual("Bill");
 
});
});

describe(`intern`, () => {
    it("should return employee id", () => {
        
    const obj = new Intern("789", "Bill", "Bill@test.com");

    expect(obj.id).toEqual("789");
});
});

describe(`intern`, () => {
    it("should return employee email", () => {
        
    const obj = new Intern("789", "Bill", "Bill@test.com");

    expect(obj.email).toEqual("Bill@test.com");

});
});

describe(`intern`, () => {
    it("should return employee role", () => {

    const obj = new Intern("789", "Bill", "Bill@test.com");

    expect(obj.getRole()).toEqual("Intern");
});
});

const { expect } = require("@jest/globals");
const checkFive = require("../src/1")

test("#checkFive returns message about less than 5 when number less than 5", () => {
    expect(checkFive(3)).toBe("3 is less than 5.");
});
test("#checkFive returns message about equal to 5 when number is 5", () => {
    expect(checkFive(5)).toBe("5 is equal to 5."); 
});
test("#checkFive returns message about greater than 5 when number greater than 5", () => {
    expect(checkFive(6)).toBe("6 is greater than 5.");
});


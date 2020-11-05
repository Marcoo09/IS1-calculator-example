const { sum, div } = require("./calculator");
const { Exceptions } = require("./exceptions");

describe("should test sum method", () => {
  it("should test sum method returning 8", () => {
    const valueA = 5;
    const valueB = 3;
    expect(sum(valueA, valueB)).toBe(8);
    expect(sum(valueA, valueB)).toBeDefined();
  });
});

describe("should test div method", () => {
  it("should test div method returning 2", () => {
    const valueA = 4;
    const valueB = 2;
    expect(div(valueA, valueB)).toBe(2);
  });
  it("should test div method returning an division by zero exception", () => {
    const valueA = 4;
    const valueB = 0;
    expect(div(valueA, valueB)).toThrow(Exceptions.DIVISION_BY_ZERO);
  });
});

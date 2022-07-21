const mathOperations = require("./index");

describe("MathsOperation Tests", () => {
  test("Adding Test", () => {
    expect(mathOperations.sum(5, 3)).toBe(8);
  });

  test("Subtracting Test", () => {
    expect(mathOperations.diff(6, 4)).toBe(2);
  });

  test("Multiplying Test", () => {
    expect(mathOperations.product(2, 3)).toBe(6);
  });

  test("Adding Test", () => {
    expect(mathOperations.sum(5, 3)).toBe(6);
  });

  test("Multiplying Test", () => {
    expect(mathOperations.product(2, 3)).toBe(8);
  });
});

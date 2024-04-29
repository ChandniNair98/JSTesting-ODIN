const calculator = require("./calculator");

  test("adding", () => {
    expect(calculator.add(1, 1)).toBe(2);
  });

  test("subtracting", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });

  test("dividing", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test("multiplying", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });

  
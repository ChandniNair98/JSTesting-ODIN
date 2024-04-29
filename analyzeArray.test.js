const analyzeArray = require("./analyzeArray");


  test("", () => {
    expect(analyzeArray([100, 100, 100, 100]).average()).toBe(100);
  });

  test("", () => {
    expect(analyzeArray([2, 6, 8, 16]).average()).toBe(8);
  });

  test('', () => {
    expect(analyzeArray([2, 6, 8, 16]).min()).toBe(2);
  });

  test('', () => {
    expect(analyzeArray([2, 6, 8, 16]).max()).toBe(16);
  });

  test('', () => {
    expect(analyzeArray([2, 6, 8, 16]).length).toBe(4);
  });

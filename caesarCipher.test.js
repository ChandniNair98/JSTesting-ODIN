const caesarCipher = require("./caesarCipher");

  test("", () => {
    expect(caesarCipher("word", 3)).toBe("zrug");
  });

  test("", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 40)).toBe(
      "opqrstuvwxyzabcdefghijklmn"
    );
  });

  test("", () => {
    expect(caesarCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 40)).toBe(
      "OPQRSTUVWXYZABCDEFGHIJKLMN"
    );
  });

  test("", () => {
    expect(caesarCipher("AbCdEf", 3)).toBe("DeFgHi");
  });

  test("", () => {
    expect(caesarCipher("##%%AbCdEf$$&&", 3)).toBe("##%%DeFgHi$$&&");
  });

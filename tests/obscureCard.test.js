const obscureCard = require("../src/obscureCard");

describe("obscureCard", () => {
  test("obscures a 16-digit credit card number correctly", () => {
    expect(obscureCard("1234567812345678")).toBe("************5678");
  });

  test("obscures a 12-digit credit card number correctly", () => {
    expect(obscureCard("123456789012")).toBe("********9012");
  });

  test('returns "Invalid Credit Card" for more than 12 digits', () => {
    expect(obscureCard("1234567890")).toBe("Invalid Credit Card");
  });

  test('return "Invalid Credit Card" for more than 16 digits', () => {
    expect(obscureCard("123456789012345678")).toBe("Invalid Credit Card");
  });

  test('returns "Invalid Credit Card" for empty string', () => {
    expect(obscureCard("")).toBe("Invalid Credit Card");
  });

  test('returns "Invalid Credit Card" for null input', () => {
    expect(obscureCard(null)).toBe("Invalid Credit Card");
  });

  test('returns "Invalid Credit Card" for undefined input', () => {
    expect(obscureCard(undefined)).toBe("Invalid Credit Card");
  });
});

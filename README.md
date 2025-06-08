6/8/25 Time - 11:51am
Starting Assignment now.

# Credit Card Obscurer

This project contains a simple JavaScript function that obscures credit card numbers by masking all but the last 4 digits. It uses Test-Driven Development (TDD) with Jest for unit testing.

## 🔒 Function Behavior

- Accepts a string input representing a credit card number.
- If the string length is between **12 and 16**, it returns a masked version (e.g. `************1234`).
- For any other length or invalid input, it returns `"Invalid Credit Card"`.

## 📁 Project Structure

credit-card-obscurer/
├── src/
│ └── obscureCard.js # Function logic
├── tests/
│ └── obscureCard.test.js # Unit tests
├── package.json
└── README.md

function obscureCard(cardNumber) {
  if (typeof cardNumber !== "string") return "Invalid Credit Card";

  const len = cardNumber.length;
  if (len < 12 || len > 16) return "Invalid Credit Card";

  const visbile = cardNumber.slice(-4);
  const obscured = "*".repeat(len - 4);
  return obscured + visbile;
}

module.exports = obscureCard;

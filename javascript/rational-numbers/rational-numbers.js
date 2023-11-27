// Helper function to calculate the greatest common divisor (gcd)
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export class Rational {
  constructor(numerator, denominator) {
    const divisor = gcd(Math.abs(numerator), Math.abs(denominator));
    this.numerator = numerator / divisor;
    this.denominator = denominator / divisor;

    // Ensure that the denominator is positive
    if (this.denominator < 0) {
      this.numerator *= -1;
      this.denominator *= -1;
    }
  }

  add(other) {
    const newNumerator =
      this.numerator * other.denominator + other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    return new Rational(newNumerator, newDenominator);
  }

  sub(other) {
    const newNumerator =
      this.numerator * other.denominator - other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    return new Rational(newNumerator, newDenominator);
  }

  mul(other) {
    const newNumerator = this.numerator * other.numerator;
    const newDenominator = this.denominator * other.denominator;
    return new Rational(newNumerator, newDenominator);
  }

  div(other) {
    const newNumerator = this.numerator * other.denominator;
    const newDenominator = this.denominator * other.numerator;
    return new Rational(newNumerator, newDenominator);
  }

  abs() {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  exprational(power) {
    return new Rational(this.numerator ** power, this.denominator ** power);
  }

  expreal(exponent) {
    return Math.pow(Math.pow(this.numerator, exponent), 1 / this.denominator);
  }

  reduce() {
    return this;
  }
}

from __future__ import division
from math import gcd

class Rational:
    def __init__(self, numer: int, denom: int):
        """
        Initialize a rational number with a numerator and denominator.
        
        :param numer: The numerator of the rational number.
        :param denom: The denominator of the rational number.
        """
        gcd_num = gcd(numer, denom)
        self.numer = numer // gcd_num if denom > 0 else -numer // gcd_num
        self.denom = denom // gcd_num if denom > 0 else -denom // gcd_num

    def __eq__(self, other: 'Rational') -> bool:
        """
        Compare two rational numbers for equality.

        :param other: The other rational number to compare with.
        :return: True if the two rational numbers are equal, False otherwise.
        """
        return self.numer == other.numer and self.denom == other.denom

    def __repr__(self) -> str:
        """
        Get a string representation of the rational number.

        :return: A string representation in the format 'numer/denom'.
        """
        return '{}/{}'.format(self.numer, self.denom)

    def __add__(self, other: 'Rational') -> 'Rational':
        """
        Add two rational numbers.

        :param other: The rational number to add.
        :return: The result of the addition as a new rational number.
        """
        numer = self.numer * other.denom + self.denom * other.numer
        denom = self.denom * other.denom

        return Rational(numer, denom)

    def __sub__(self, other: 'Rational') -> 'Rational':
        """
        Subtract one rational number from another.

        :param other: The rational number to subtract.
        :return: The result of the subtraction as a new rational number.
        """
        numer = self.numer * other.denom - self.denom * other.numer
        denom = self.denom * other.denom

        return Rational(numer, denom)

    def __mul__(self, other: 'Rational') -> 'Rational':
        """
        Multiply two rational numbers.

        :param other: The rational number to multiply by.
        :return: The result of the multiplication as a new rational number.
        """
        numer = self.numer * other.numer
        denom = self.denom * other.denom

        return Rational(numer, denom)

    def __truediv__(self, other: 'Rational') -> 'Rational':
        """
        Divide one rational number by another.

        :param other: The rational number to divide by.
        :return: The result of the division as a new rational number.
        """
        numer = self.numer * other.denom
        denom = self.denom * other.numer

        return Rational(numer, denom)

    def __abs__(self) -> 'Rational':
        """
        Calculate the absolute value (magnitude) of the rational number.

        :return: The absolute value as a new rational number.
        """
        numer = abs(self.numer)
        denom = abs(self.denom)

        return Rational(numer, denom)

    def __pow__(self, power: int) -> 'Rational':
        """
        Calculate the rational number raised to a power.

        :param power: The exponent to which the rational number is raised.
        :return: The result as a new rational number.
        """
        numer = pow(self.numer, abs(power))
        denom = pow(self.denom, abs(power))

        return Rational(numer, denom) if power >= 0 else Rational(denom, numer)

    def __rpow__(self, base: float) -> float:
        """
        Calculate the power of a base to the rational number.

        :param base: The base number.
        :return: The result as a floating-point number.
        """
        return pow(base, self.numer / self.denom)

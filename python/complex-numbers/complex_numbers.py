import math

class ComplexNumber:
    def __init__(self, real: float, imaginary: float):
        """
        Initialize a complex number with a real and imaginary part.

        :param real: The real part of the complex number.
        :param imaginary: The imaginary part of the complex number.
        """
        self.real = real
        self.imaginary = imaginary

    def __eq__(self, other: 'ComplexNumber') -> bool:
        """
        Compare two complex numbers for equality.

        :param other: The other complex number to compare with.
        :return: True if the two complex numbers are equal, False otherwise.
        """
        return self.real == other.real and self.imaginary == other.imaginary

    def __add__(self, other: 'ComplexNumber') -> 'ComplexNumber':
        """
        Add two complex numbers.

        :param other: The complex number to add.
        :return: The result of the addition as a new complex number.
        """
        real_part = self.real + other.real
        imaginary_part = self.imaginary + other.imaginary
        return ComplexNumber(real_part, imaginary_part)

    def __mul__(self, other: 'ComplexNumber') -> 'ComplexNumber':
        """
        Multiply two complex numbers.

        :param other: The complex number to multiply by.
        :return: The result of the multiplication as a new complex number.
        """
        real_part = (self.real * other.real) - (self.imaginary * other.imaginary)
        imaginary_part = (self.real * other.imaginary) + (self.imaginary * other.real)
        return ComplexNumber(real_part, imaginary_part)

    def __sub__(self, other: 'ComplexNumber') -> 'ComplexNumber':
        """
        Subtract one complex number from another.

        :param other: The complex number to subtract.
        :return: The result of the subtraction as a new complex number.
        """
        real_part = self.real - other.real
        imaginary_part = self.imaginary - other.imaginary
        return ComplexNumber(real_part, imaginary_part)

    def __truediv__(self, other: 'ComplexNumber') -> 'ComplexNumber':
        """
        Divide one complex number by another.

        :param other: The complex number to divide by.
        :return: The result of the division as a new complex number.
        """
        denominator = (other.real ** 2) + (other.imaginary ** 2)
        real_part = ((self.real * other.real) + (self.imaginary * other.imaginary)) / denominator
        imaginary_part = ((self.imaginary * other.real) - (self.real * other.imaginary)) / denominator
        return ComplexNumber(real_part, imaginary_part)

    def __abs__(self) -> float:
        """
        Calculate the absolute value (magnitude) of the complex number.

        :return: The absolute value as a floating-point number.
        """
        return math.sqrt((self.real ** 2) + (self.imaginary ** 2))

    def conjugate(self) -> 'ComplexNumber':
        """
        Calculate the complex conjugate of the complex number.

        :return: The complex conjugate as a new complex number.
        """
        return ComplexNumber(self.real, -self.imaginary)

    def exp(self) -> 'ComplexNumber':
        """
        Calculate the exponentiation of the complex number using Euler's formula.

        :return: The result of exponentiation as a new complex number.
        """
        real_part = math.exp(self.real) * math.cos(self.imaginary)
        imaginary_part = math.exp(self.real) * math.sin(self.imaginary)
        return ComplexNumber(real_part, imaginary_part)

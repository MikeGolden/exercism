from math import sqrt, exp, cos, sin

class ComplexNumber:
    def __init__(self, real: float, imaginary: float):
        """
        Initialize a complex number with a real and imaginary part.

        :param real: The real part of the complex number.
        :param imaginary: The imaginary part of the complex number.
        """
        self.real = real
        self.imaginary = imaginary
        self.norm = real ** 2 + imaginary ** 2  # Norm of the complex number

    def _force_complex_other(func):
        """
        A decorator that ensures the input is converted to a ComplexNumber.

        :param func: The function to be decorated.
        :return: A decorated function.
        """
        def wrapper(self, other):
            if not isinstance(other, ComplexNumber):
                other = ComplexNumber(other, 0)
            return func(self, other)
        return wrapper

    @_force_complex_other
    def __eq__(self, other: 'ComplexNumber') -> bool:
        """
        Compare two complex numbers for equality.

        :param other: The other complex number to compare with.
        :return: True if the two complex numbers are equal, False otherwise.
        """
        return self.real == other.real and self.imaginary == other.imaginary

    @_force_complex_other
    def __add__(self, other: 'ComplexNumber') -> 'ComplexNumber':
        """
        Add two complex numbers.

        :param other: The complex number to add.
        :return: The result of the addition as a new complex number.
        """
        new_real = self.real + other.real
        new_imaginary = self.imaginary + other.imaginary
        return ComplexNumber(new_real, new_imaginary)

    @_force_complex_other
    def __radd__(self, other: 'ComplexNumber') -> 'ComplexNumber':
        return other + self

    @_force_complex_other
    def __mul__(self, other: 'ComplexNumber') -> 'ComplexNumber':
        """
        Multiply two complex numbers.

        :param other: The complex number to multiply by.
        :return: The result of the multiplication as a new complex number.
        """
        a, b, c, d = self.real, self.imaginary, other.real, other.imaginary
        new_real = a * c - b * d
        new_imaginary = b * c + a * d
        return ComplexNumber(new_real, new_imaginary)

    @_force_complex_other
    def __rmul__(self, other: 'ComplexNumber') -> 'ComplexNumber':
        return other * self

    @_force_complex_other
    def __sub__(self, other: 'ComplexNumber') -> 'ComplexNumber':
        """
        Subtract one complex number from another.

        :param other: The complex number to subtract.
        :return: The result of the subtraction as a new complex number.
        """
        return self + ComplexNumber(-other.real, -other.imaginary)

    @_force_complex_other
    def __rsub__(self, other: 'ComplexNumber') -> 'ComplexNumber':
        return other - self

    def reciprocal(self) -> 'ComplexNumber':
        """
        Calculate the reciprocal of the complex number.

        :return: The reciprocal as a new complex number.
        """
        new_real = self.real / self.norm
        new_imaginary = -self.imaginary / self.norm
        return ComplexNumber(new_real, new_imaginary)

    @_force_complex_other
    def __truediv__(self, other: 'ComplexNumber') -> 'ComplexNumber':
        return self * other.reciprocal()

    @_force_complex_other
    def __rtruediv__(self, other: 'ComplexNumber') -> 'ComplexNumber':
        return other / self

    def __abs__(self) -> float:
        """
        Calculate the absolute value (magnitude) of the complex number.

        :return: The absolute value as a floating-point number.
        """
        return sqrt(self.norm)

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
        a, b = self.real, self.imaginary
        new_real = exp(a) * cos(b)
        new_imaginary = exp(a) * sin(b)
        return ComplexNumber(new_real, new_imaginary)

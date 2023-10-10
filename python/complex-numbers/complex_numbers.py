import math

class ComplexNumber:
    def __init__(self, real, imaginary):
        self.real = real
        self.imaginary = imaginary

    def __eq__(self, other):
        return self.real == other.real and self.imaginary == other.imaginary

    def __add__(self, other):
        real_part = self.real + other.real
        imaginary_part = self.imaginary + other.imaginary
        return ComplexNumber(real_part, imaginary_part)

    def __mul__(self, other):
        real_part = (self.real * other.real) - (self.imaginary * other.imaginary)
        imaginary_part = (self.real * other.imaginary) + (self.imaginary * other.real)
        return ComplexNumber(real_part, imaginary_part)

    def __sub__(self, other):
        real_part = self.real - other.real
        imaginary_part = self.imaginary - other.imaginary
        return ComplexNumber(real_part, imaginary_part)

    def __truediv__(self, other):
        denominator = (other.real ** 2) + (other.imaginary ** 2)
        real_part = ((self.real * other.real) + (self.imaginary * other.imaginary)) / denominator
        imaginary_part = ((self.imaginary * other.real) - (self.real * other.imaginary)) / denominator
        return ComplexNumber(real_part, imaginary_part)

    def __abs__(self):
        return math.sqrt((self.real ** 2) + (self.imaginary ** 2))

    def conjugate(self):
        return ComplexNumber(self.real, -self.imaginary)

    def exp(self):
        real_part = math.exp(self.real) * math.cos(self.imaginary)
        imaginary_part = math.exp(self.real) * math.sin(self.imaginary)
        return ComplexNumber(real_part, imaginary_part)

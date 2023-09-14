def equilateral(sides):
    a = sides[0]
    b = sides[1]
    c = sides[2]
    if a == b == c and a != 0 :
        return True
    else:
        return False


def isosceles(sides):
    a = sides[0]
    b = sides[1]
    c = sides[2]
    if a + b >= c and b + c >= a and a + c >= b:
        if a == b or b == c or c == a:
            return True
        else:
            return False
    else:
        return False


def scalene(sides):
    a = sides[0]
    b = sides[1]
    c = sides[2]
    if a + b >= c and b + c >= a and a + c >= b:
        if a != b and b != c and a != c:
            return True
        else:
            return False
    else:
        return False

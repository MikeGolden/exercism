import inspect
from itertools import chain
import string


# Define dictionary OPS that maps operators to corresponding lambda functions
OPS = {
    '+':    lambda x, y: [y + x],   # Addition
    '-':    lambda x, y: [y - x],   # Subtraction
    '*':    lambda x, y: [y * x],   # Multiplication
    '/':    lambda x, y: [y // x],  # Integer Division
    'dup':  lambda x:    [x, x],    # Duplicate the top item on the stack
    'drop': lambda _:    [],        # Remove the top item from the stack
    'swap': lambda x, y: [x, y],    # Swap the top two items on the stack
    'over': lambda x, y: [y, x, y]  # Copy the second item on the stack to the top
}

# Custom Exception classes for error handling
class StackUnderflowError(Exception):
    def __init__(self):
        super().__init__('Insufficient number of items in stack')

class ZeroDivisonError(Exception):
    def __init__(self):
        super().__init__('divide by zero')

# Function to check if an element is a valid number
def is_number(elem):
    return elem and (set(elem) < set(string.digits)
                     or (elem[0] == '-' and is_number(elem[1:])))

# Function to apply an element to the stack
def apply(stack, elem):
    if is_number(elem):
        stack.append(int(elem))
    elif elem in OPS:
        op = OPS[elem]
        count = len(inspect.signature(op).parameters)
        if len(stack) < count:
            raise StackUnderflowError
        stack.extend(op(*(stack.pop() for x in range(count))))
    else:
        raise ValueError('undefined operation')

# Function to substitute custom definitions in input data
def substitute(custom, elems):
    return list(chain(*(custom[x] if x in custom else [x] for x in elems)))

# Main evaluation function
def evaluate(input_data):
    stack = []
    custom = {}
    try:
        for line in input_data:
            elems = line.lower().split()
            if elems[0] == ':':
                assert elems[-1] == ';'
                op = elems[1]
                if is_number(op):
                    raise ValueError('illegal operation')
                custom[op] = substitute(custom, elems[2:-1])
            else:
                elems = substitute(custom, elems)
                for elem in elems:
                    apply(stack, elem)
        return stack
    except ZeroDivisionError:
        raise ZeroDivisionError('divide by zero')
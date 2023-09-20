from collections.abc import Iterable
from typing import Callable, Any

# Function to append two lists
def append(list1: list, list2: list) -> list:
    return [*list1, *list2]

# Function to concatenate multiple lists into one
def concat(lists: list) -> list:
    result = []
    for item in lists:
        if isinstance(item, Iterable):
            result.extend(item)
        else:
            result.append(item)
    return result

# Function to filter elements in a list using a custom function
def filter(myfunction: Callable, mylist: list) -> list:
    return [l for l in mylist if myfunction(l)]

# Function to get the length of a list
def length(mylist: list) -> int:
    return len(mylist)

# Function to apply a custom function to each element of a list
def map(myfunction: Callable, mylist: list) -> list:
    return [myfunction(l) for l in mylist]

# Function to fold (reduce) a list from the left using a custom function and an initial value
def foldl(myfunction: Callable, mylist: list, initial: Any) -> Any:
    while mylist:
        initial = myfunction(initial, mylist.pop(0))
    return initial

# Function to fold (reduce) a list from the right using a custom function and an initial value
def foldr(myfunction: Callable, mylist: list, initial: Any) -> Any:
    while mylist:
        initial = myfunction(initial, mylist.pop())
    return initial

# Function to reverse a list
def reverse(mylist: list) -> list:
    return mylist[::-1]

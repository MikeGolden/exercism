class CustomSet:
    def __init__(self, elements=[]):
        # Initialize the internal list with unique elements
        self.elements = list(set(elements))

    def isempty(self):
        # Check if the internal list is empty
        return len(self.elements) == 0

    def __contains__(self, element):
        # Check if an element is in the set
        return element in self.elements

    def issubset(self, other):
        # Check if the set is a subset of another set
        return all(element in other.elements for element in self.elements)

    def isdisjoint(self, other):
        # Check if the set is disjoint with another set
        return all(element not in other.elements for element in self.elements)

    def __eq__(self, other):
        # Check if two sets are equal
        return set(self.elements) == set(other.elements)

    def add(self, element):
        # Add an element to the set if it's not already present
        if element not in self.elements:
            self.elements.append(element)

    def intersection(self, other):
        # Find the intersection of two sets
        return CustomSet([element for element in self.elements if element in other.elements])

    def __sub__(self, other):
        # Find the difference between two sets (elements in self but not in other)
        return CustomSet([element for element in self.elements if element not in other.elements])

    def __add__(self, other):
        # Find the union of two sets (combine elements from both sets)
        return CustomSet(self.elements + other.elements)

    def __str__(self):
        # Convert the set to a string for easy printing
        return "{" + ", ".join(map(str, self.elements)) + "}"

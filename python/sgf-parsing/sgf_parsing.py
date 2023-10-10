class SgfTree:
    def __init__(self, properties=None, children=None):
        self.properties = properties or {}  # Dictionary to store properties
        self.children = children or []  # List to store child nodes
    
    def __eq__(self, other):
        # Custom equality check for SgfTree objects
        if not isinstance(other, SgfTree):
            return False
        
        # Check if properties match
        for key, value in self.properties.items():
            if key not in other.properties:
                return False
            if other.properties[key] != value:
                return False
        
        # Check if the number of children nodes match
        if len(self.children) != len(other.children):
            return False
        
        # Recursively compare child nodes
        for child, other_child in zip(self.children, other.children):
            if child != other_child:
                return False
        
        return True
    
    def __ne__(self, other):
        return not self == other

def parse(input: str) -> SgfTree:
    pos = 1
    
    def get_property():
        nonlocal pos
        ind = pos
        
        # Find the property key
        while input[ind].isupper():
            ind += 1
        
        # Check for uppercase property key
        if input[ind].islower():
            raise ValueError('property must be in uppercase')
        
        # Check for properties without delimiter
        if input[ind] != '[':
            raise ValueError('properties without delimiter')
        
        key = input[pos:ind]
        prop = {key: []}
        pos = ind
        
        # Parse property values
        while input[pos] == '[':
            pos = ind = pos + 1
            w = []
            while input[ind] != ']':
                if input[ind] == '\t':
                    w.append(' ')
                elif input[ind:ind + 2] in ('\\]', '\\\\'):
                    w.append(input[ind + 1])
                    ind += 1
                elif input[ind:ind + 2] == '\\\n':
                    ind += 1
                elif input[ind] != '\\':
                    w.append(input[ind])
                ind += 1
            prop[key].append(''.join(w))
            pos = ind + 1
        return prop
    
    def get_node():
        nonlocal pos
        properties = {}
        children = []
        
        # Skip opening parentheses
        while input[pos] == '(':
            pos += 1
        
        # Check for empty tree
        if input[pos] == ')':
            raise ValueError('tree with no nodes')
        
        # Move to the next character
        pos += 1
        
        # Parse properties
        while input[pos] not in ('(', ')', ';'):
            properties.update(get_property())
        
        # Parse child nodes
        while pos < len(input) and input[pos] != ')':
            children.append(get_node())
        
        # Skip closing parentheses
        pos += 1
        
        return SgfTree(properties, children)  
    
    # Check for a valid starting character
    if not input.startswith('('):
        raise ValueError('tree missing')
    
    # Start parsing and return the root node
    return get_node()

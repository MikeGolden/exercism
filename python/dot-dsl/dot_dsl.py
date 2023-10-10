from typing import List, Tuple, Union, Dict

# Constants to represent different types of items in the graph data
NODE, EDGE, ATTR = range(3)

class Node:
    def __init__(self, name: str, attrs: Dict[str, str]):
        """
        Initialize a Node object with a name and attributes.

        :param name: The name of the node.
        :param attrs: A dictionary of attributes associated with the node.
        """
        self.name = name
        self.attrs = attrs

    def __eq__(self, other: 'Node') -> bool:
        """
        Compare two Node objects for equality.

        :param other: The other Node object to compare with.
        :return: True if the two Node objects are equal, False otherwise.
        """
        return self.name == other.name and self.attrs == other.attrs

class Edge:
    def __init__(self, src: str, dst: str, attrs: Dict[str, str]):
        """
        Initialize an Edge object with source, destination, and attributes.

        :param src: The source node's name.
        :param dst: The destination node's name.
        :param attrs: A dictionary of attributes associated with the edge.
        """
        self.src = src
        self.dst = dst
        self.attrs = attrs

    def __eq__(self, other: 'Edge') -> bool:
        """
        Compare two Edge objects for equality.

        :param other: The other Edge object to compare with.
        :return: True if the two Edge objects are equal, False otherwise.
        """
        return (self.src == other.src and
                self.dst == other.dst and
                self.attrs == other.attrs)

class Graph:
    def __init__(self, data: List[Union[Tuple[int, str, Dict[str, str]], Tuple[int, str, str, Dict[str, str]]]] = []):
        """
        Initialize a Graph object with a list of data representing nodes, edges, and attributes.

        :param data: A list of tuples representing nodes, edges, and attributes in the graph.
        """
        self.nodes = []  # List to store Node objects
        self.edges = []  # List to store Edge objects
        self.attrs = {}  # Dictionary to store attributes

        if type(data) != list:
            raise TypeError("Graph data malformed")
        
        for d in data:
            if type(d) != tuple or len(d) not in (3, 4):
                raise TypeError("Graph item incomplete")
            
            if d[0] == NODE:
                if len(d) != 3 or type(d[1]) != str or type(d[2]) != dict:
                    raise ValueError("Node is malformed")
                self.nodes.append(Node(*d[1:]))
            elif d[0] == EDGE:
                if len(d) != 4 or type(d[1]) != str or type(d[2]) != str or type(d[3]) != dict:
                    raise ValueError("Edge is malformed")
                self.edges.append(Edge(*d[1:]))
            elif d[0] == ATTR:
                if len(d) != 3 or type(d[1]) != str or type(d[2]) != str:
                    raise ValueError("Attribute is malformed")
                self.attrs[d[1]] = d[2]
            else:
                raise ValueError("Unknown item")

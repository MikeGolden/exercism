class Record:
    def __init__(self, record_id, parent_id):
        self.record_id = record_id  # Initialize the record's unique ID
        self.parent_id = parent_id  # Initialize the ID of the parent record

class Node:
    def __init__(self, node_id):
        self.node_id = node_id  # Initialize the node's unique ID
        self.children = []  # Initialize an empty list to store child nodes

def BuildTree(records: list[Record]) -> Node | None:
    if not records:
        return None  # If the input records list is empty, return None (no tree to build)

    # Sort the records based on their unique IDs (record_id)
    records = sorted(records, key=lambda x: x.record_id)

    # Create the root node using the record_id of the first record
    root = Node(records[0].record_id)

    # Check if the root node's ID is 0 and the last record's ID is the length of records - 1
    if root.node_id != 0 or records[-1].record_id != len(records) - 1:
        raise ValueError("Record id is invalid or out of order.")

    # Check if the root node's parent_id is equal to its record_id (root node condition)
    if records[0].parent_id != records[0].record_id:
        raise ValueError("Node parent_id should be smaller than it's record_id.")

    # Create a dictionary to store nodes by their node_id for quick access
    nodes = {0: root}

    # Iterate through the records starting from the second record
    for record in records[1:]:
        # Check if a record has the same record_id and parent_id (only the root should have this)
        if record.record_id == record.parent_id:
            raise ValueError("Only root should have equal record and parent id.")

        # Check if a record's parent_id is smaller than its record_id (parent-child relationship)
        if record.record_id < record.parent_id:
            raise ValueError("Node parent_id should be smaller than it's record_id.")

        # Create a new node with the current record's record_id
        node = Node(record.record_id)

        # Check if a node with the same node_id already exists (should not happen)
        if node.node_id in nodes:
            raise ValueError("Record id is invalid or out of order.")

        # Add the new node to the nodes dictionary for quick access
        nodes[node.node_id] = node

        try:
            # Add the new node as a child to its parent node
            nodes[record.parent_id].children.append(node)
        except KeyError:
            raise ValueError("Record id is invalid or out of order.")

    return root  # Return the root node of the built tree

class Garden:
    # Define a list of student names as a class constant
    STUDENTS = ["Alice", "Bob", "Charlie", "David", "Eve", "Fred",
                "Ginny", "Harriet", "Ileana", "Joseph", "Kincaid", "Larry", ]
    
    # Define a dictionary that maps plant codes to plant names as a class constant
    PLANTS = {"G": "Grass", "C": "Clover", "R": "Radishes", "V": "Violets", }

    def __init__(self, diagram, students=STUDENTS):
        # Split the diagram into two rows based on newline character
        row0, row1 = diagram.split('\n')
        # Sort the list of students in alphabetical order
        students = sorted(students)
        # Initialize a dictionary to store the plants for each student
        self.cups = {}

        # Iterate over the cups in the diagram
        for i in range(len(row0) // 2):
            # Extract the seeds from the corresponding positions in both rows
            seeds = [row0[2 * i], row0[2 * i + 1],
                     row1[2 * i], row1[2 * i + 1]]
            # Map the seeds to plant names and store them in the dictionary
            self.cups[students[i]] = [self.PLANTS[seed] for seed in seeds]

    def plants(self, student):
        # Retrieve and return the list of plants for the specified student
        return self.cups[student]

class School:
    def __init__(self):
        # Initialize an empty dictionary to store the school's roster.
        # Initialize an empty list to keep track of whether students are added.
        self.school = {}
        self.add = []

    def add_student(self, name, grade):
        # Check if the student's name is not already in the roster.
        if name not in self.roster():
            # If not, add the student to the specified grade.
            # If the grade doesn't exist, create it.
            self.school[grade] = self.school.get(grade, []) + [name]
            # Append True to the 'add' list to indicate the student was added.
            self.add.append(True)
        else:
            # If the student's name is already in the roster, append False to 'add'.
            self.add.append(False)

    def added(self):
        # Return the 'add' list, which contains True for added students and False for existing ones.
        return self.add

    def roster(self):
        # Create a sorted list of student names by iterating through grades and names in each grade.
        return [name
                for grade in sorted(self.school.keys())
                for name in sorted(self.school[grade])]

    def grade(self, grade_number):
        # Return a sorted list of students in the specified grade or an empty list if the grade doesn't exist.
        return sorted(self.school.get(grade_number, []))

export class GradeSchool {
  constructor() {
    this.students = {}; // Initialize an empty object to store student data
  }

  // Return a deep copy of the roster, organized by grade
  roster() {
    const roster = {};

    // Iterate through the students object and create a copy of the roster
    for (const grade in this.students) {
      roster[grade] = [...this.students[grade]];
    }

    return roster;
  }

  // Add a student to a specific grade
  add(name, grade) {
    // Remove the student from all other grades if they exist
    for (const g in this.students) {
      if (this.students[g].includes(name)) {
        this.students[g] = this.students[g].filter((n) => n !== name);
      }
    }

    if (!this.students[grade]) {
      this.students[grade] = []; // Initialize an array for the grade if it doesn't exist
    }

    this.students[grade].push(name); // Add the student to the specified grade
    this.students[grade].sort(); // Sort the students' names in the grade
  }

  // Return a list of students for a specific grade
  grade(grade) {
    return this.students[grade] ? [...this.students[grade]] : []; // Return a copy of the students in the grade
  }
}

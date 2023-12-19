const DEFAULT_STUDENTS = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Fred",
  "Ginny",
  "Harriet",
  "Ileana",
  "Joseph",
  "Kincaid",
  "Larry",
];

const PLANT_CODES = {
  G: "grass",
  V: "violets",
  R: "radishes",
  C: "clover",
};

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    // Split the diagram into individual rows
    const rows = diagram.split("\n");

    // Create an empty object to store plants for each student
    this.plantsMap = {};

    // Sort students' names alphabetically
    students.sort();

    // Split the diagram into pairs of plants for each row and assign to each student
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      const start = i * 2;
      const end = start + 2;

      // Extract the plants for the current student
      const plants = [
        ...rows[0].slice(start, end),
        ...rows[1].slice(start, end),
      ];

      // Map the plant codes to plant names and assign to the current student
      this.plantsMap[student] = plants.map((code) => PLANT_CODES[code]);
    }
  }

  plants(student) {
    // Return the plants for the specified student
    return this.plantsMap[student];
  }
}

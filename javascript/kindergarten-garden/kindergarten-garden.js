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
    const rows = diagram.split("\n");

    this.plantsMap = {};
    students.sort();
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      const start = i * 2;
      const end = start + 2;
      const plants = [
        ...rows[0].slice(start, end),
        ...rows[1].slice(start, end),
      ];
      this.plantsMap[student] = plants.map((code) => PLANT_CODES[code]);
    }
  }

  plants(student) {
    return this.plantsMap[student];
  }
}

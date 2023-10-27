//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.students = {};
  }

  roster() {
    const roster = {};

    for (const grade in this.students) {
      roster[grade] = [...this.students[grade]];
    }

    return roster;
  }

  add(name, grade) {
    for (const g in this.students) {
      if (this.students[g].includes(name)) {
        this.students[g] = this.students[g].filter((n) => n !== name); 
      }
    }

    if (!this.students[grade]) {
      this.students[grade] = [];
    }

    this.students[grade].push(name);
    this.students[grade].sort();
  }

  grade (grade) {
    return this.students[grade] ? [...this.students[grade]] : [];
  }
}

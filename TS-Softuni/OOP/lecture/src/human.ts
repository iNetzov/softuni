interface Person {
  greet(): string;
}

class Student implements Person {
  private eyeColor: string;
  private skinColor: string;

  constructor(eyeColor: string, skinColor: string) {
    this.eyeColor = eyeColor;
    this.skinColor = skinColor;
  }
  greet(): string {
    return `i am a student with ${this.eyeColor} eyes`;
  }
}

class Teacher implements Person {
  greet(): string {
    return `i am a teacher!`;
  }
}
const student = new Student("blue", "black");
console.log(student.greet());
const teacher = new Teacher();
console.log(teacher.greet());

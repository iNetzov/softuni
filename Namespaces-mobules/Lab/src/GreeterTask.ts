// Task1

class Person implements Greeter.Greeting {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  introduction(): string {
    return `My name is ${this.name} and i am ${this.age}`;
  }
  sayGoodbye(name: string): string {
    return `Dear ${name},it was a pleasure meeting you!`;
  }
}

const person1 = new Person("Ivan", 22);
const person2 = new Person("Martin", 13);
console.log(person1.introduction());
console.log(person1.sayGoodbye("Marting Popov"));

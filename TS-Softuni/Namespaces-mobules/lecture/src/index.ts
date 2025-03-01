namespace PersonUtils {
  interface PersonDetails {
    name: string;
  }

  export class Person implements PersonDetails {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
    getName(): string {
      return this.name;
    }
  }
}

const na = new PersonUtils.Person("ivn");
/// <reference path="Animal.ts" />
const animal = new AnimalGroup.Animal("1", 1, "1");

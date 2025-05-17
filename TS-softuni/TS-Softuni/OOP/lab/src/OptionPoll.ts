class Person {
  private _name: string = "";
  private _age: number = 0;

  /**
   *
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public get name() {
    return this._name;
  }
  private set name(newName: string) {
    this._name = newName;
  }

  public get age() {
    return this._age;
  }
  private set age(newAge: number) {
    this._age = newAge;
  }

  public getDetails(): void {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

const personPeter = new Person("Peter", 12);
const personIvaylo = new Person("Ivaylo", 33);

personPeter.getDetails();
personIvaylo.getDetails();

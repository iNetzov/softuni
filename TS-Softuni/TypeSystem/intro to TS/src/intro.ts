class Person {
  private firstName: string;
  constructor(fName: string) {
    this.firstName = fName;
  }

  greeting() {
    return `Hello ${this.firstName}`;
  }
}

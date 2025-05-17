class Employee {
  // FIELDS
  private _firstName: string;
  // CONSTRUCTOR
  constructor(_firstName: string) {
    this._firstName = _firstName;
  }
  // GETTER
  public get firstName(): string {
    return this._firstName;
  }
  //   SETTER
  public set firstName(newFirstName: string) {
    this._firstName = newFirstName;
  }
}

const employeee = new Employee("martin");

// Calling getter
console.log(employeee.firstName);

// Calling setter
employeee.firstName = "marta";
console.log(employeee.firstName);

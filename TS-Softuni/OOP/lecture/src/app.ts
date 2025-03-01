// PROCEDURE PROGRAMMING
const baseSalary: number = 3_000;
const overtime: number = 10;

function getWage(baseSalary: number, overtime: number) {
  return baseSalary * overtime * 1.5;
}
console.log(getWage(baseSalary, overtime));
// PROCEDURE PROGRAMMING

// OOP
const employee = {
  baseSalaryOOP: 3_000,
  overtimeOOP: 10,
  getWageOOP: function (): number {
    return this.baseSalaryOOP * this.overtimeOOP * 1.5;
  },
};
console.log(employee.getWageOOP());
// OOP

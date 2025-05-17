function calc(firstNumber: number, operator: string, secondNumber: number) {
  let output: number = eval(firstNumber + " " + operator + " " + secondNumber);
  return output.toFixed(2);
}

console.log(calc(5, "+", 8));
console.log(calc(5, "-", 8));
console.log(calc(5, "*", 8));
console.log(calc(5, "/", 8));

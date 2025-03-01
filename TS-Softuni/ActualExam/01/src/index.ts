function solve(start: number, end: number): void {
  let numbers: number[] = [];
  let sum: number = 0;

  for (let i = start; i <= end; i++) {
    numbers.push(i);
    sum += i;
  }
  console.log(numbers.join(" "));
  console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);

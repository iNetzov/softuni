function largerNumber(a: number, b: number, c: number) {
  let array: number[] = [a, b, c];
  let biggestNum: number = Math.max(...array.map((o) => o));

  console.log(`The largest number is ${biggestNum}`);
}
largerNumber(5, 3, 16);
largerNumber(-3, -5, -22.5);
largerNumber(5, 33, 16);

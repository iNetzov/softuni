function printFromNToM(n: string, m: string) {
  let nToNumber: number = Number(n);
  let mToNumnber: number = Number(m);
  let sum: number = 0;
  for (let i = nToNumber; i <= mToNumnber; i++) {
    sum += i;
  }
  return sum;
}

console.log(printFromNToM("1", "5"));

function echo<T>(arg: T) {
  console.log(typeof arg);
}
echo(1);
echo("saaasdas");
echo(true);

const takeLast = <T>(array: T[]) => {
  return array[array.length - 1];
};
console.log(takeLast([1, 2, 3, 4, 5]));

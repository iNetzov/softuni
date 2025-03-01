function solve(inputData: string[]): void {
  const basket = {};
  for (const el of inputData) {
    const [town, product, price] = el.split(" | ");
    let object = { town: town, price: Number(price) };
    if (basket[product] === undefined) {
      basket[product] = object;
    } else if (basket[product].price > Number(price)) {
      basket[product] = object;
    }
  }
  for (const el of Object.entries(basket)) {
    const [town, price] = Object.values(el[1]);
    console.log(`${el[0]} -> ${price} (${town})`);
  }
}

solve([
  "Sample Town | Sample Product | 1000",
  "New York | Sample Product | 1000.1",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Burger | 10",
]);

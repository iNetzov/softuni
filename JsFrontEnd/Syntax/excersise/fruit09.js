function solve(item,weightInGrams,priceOnKilos){
let priceInGrams = priceOnKilos / 1000;
let totalSum = weightInGrams *priceInGrams;
 
console.log(`I need \$${totalSum.toFixed(2)} to buy ${(weightInGrams / 1000).toFixed(2)} kilograms ${item}.`)
}

solve('apple',2500, 1.80)
solve('apple',1563,2.35)
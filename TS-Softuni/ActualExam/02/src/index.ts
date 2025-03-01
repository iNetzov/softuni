function cityTaxes(cityName: string, population: number, treasury: number) {
  const taxRate: number = 10;
  return {
    cityName: cityName,
    population: population,
    treasury: treasury,
    taxRate: taxRate,
    collectTaxes: function (): void {
      this.treasury += Math.floor(this.population * this.taxRate);
    },
    applyGrowth: function (percentage: number): void {
      this.population = Math.floor(population * Math.pow(percentage / 100, 1));
    },
    applyRecession: function (percentage: number): void {
      this.treasury = Math.floor(treasury * (percentage / 100));
    },
  };
}

const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);
console.log();
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

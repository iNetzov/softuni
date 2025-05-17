"use strict";
function cityTaxes(cityName, population, treasury) {
    const taxRate = 10;
    return {
        cityName: cityName,
        population: population,
        treasury: treasury,
        taxRate: taxRate,
        collectTaxes: function () {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth: function (percentage) {
            this.population = Math.floor(population * Math.pow(percentage / 100, 1));
        },
        applyRecession: function (percentage) {
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

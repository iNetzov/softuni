function solve1 (name, population, treasury) {

    let city = {
        name,
        population,
        treasury,
        taxRate : 10,
        collectTaxes(){this.treasury = Math.ceil(this.treasury + this.population * this.taxRate)},
        applyGrowth(percent){
            let newPopulation  = this.population / 100
            this.population = population + Math.ceil(newPopulation*percent);
        },
        applyRecession(percent){
            let newTreasury = this.treasury /100;
            this.treasury = this.treasury - Math.ceil(newTreasury*percent);
        }
    
    }
    // console.log(city.treasury);
    // city.collectTaxes;
    // console.log(city.treasury);
    return city;
}
let city = solve1('Tortuga',7000,15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
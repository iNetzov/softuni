function solve (name,population ,treasury){
    const city = {
        name:name,
        population:population,
        treasury:treasury,
        taxRate: 10,
        collectTaxes(){this.treasury += this.population * this.taxRate},
        applyGroth(percent){this.population += Math.floor(this.population* percent/100)},
        applyRecession(percent){this.treasury -= Math.ceil(this.treasury*percent/100)},
    }
    return city;
}
const result = solve('sofia',100,50)
console.log(result);
result.applyGroth(50);
result.applyRecession(50);
console.log(result);
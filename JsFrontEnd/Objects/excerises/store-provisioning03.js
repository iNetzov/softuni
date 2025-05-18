function  solve(arrayOne, arrayTwo) {
    let catalog = {};

    for (let i = 0; i < arrayOne.length; i+= 2) {
        let product = arrayOne[i];
        let price =  Number(arrayOne[i+1]);
    
    if(!catalog.hasOwnProperty(product)){
        catalog[product] = price;
    }else {
        let oldPrice = catalog[product];
        let newPrice = oldPrice + price;
        catalog[product] = newPrice;
    }
    }

    for (let i = 0; i < arrayTwo.length; i+= 2) {
        let product = arrayTwo[i];
        let price =  Number(arrayTwo[i+1]);
    
    if(!catalog.hasOwnProperty(product)){
        catalog[product] = price;
    }else {
        let oldPrice = catalog[product];
        let newPrice = oldPrice + price;
        catalog[product] = newPrice;
    }
    }
    for (const key in catalog) {
        console.log(`${key} -> ${catalog[key]}`);
    }
}

solve(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas',
        '14', 'Pasta', '4', 'Beer', '2'   
        ],
        
        [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
        ]
)
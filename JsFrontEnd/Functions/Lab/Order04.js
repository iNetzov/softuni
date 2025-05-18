function solve (item, quantity){

   let foundItem =  findItem(item);
   let SingleItemPrice =  findPrice(foundItem);
    let findTotalPrice1 = findTotalPrice(SingleItemPrice,quantity);
    printTotalPrice(findTotalPrice1);

    function findItem(item){
        switch(item){
            case 'coffee':
                return 'coffee';
            case 'coke':
                return 'coke';
            case 'water':
                return 'water';
            case 'snack':
                return 'snack';
        }
    }
    function findPrice(item){
        switch(item){
            case 'coffee':
                return 1.50;
            case 'coke':
                return 1.40;
            case 'water':
                return 1.00;
            case 'snack':
                return 2.00;
        }
    }
   function findTotalPrice(SingleItemPrice,quantity) {
    return SingleItemPrice * quantity;
   }

   function printTotalPrice(price){
    console.log(`${price.toFixed(2)}`)
   }
}

solve('water',5);
solve('coffee',2);
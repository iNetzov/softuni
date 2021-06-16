function solve(inputArr) {
    let objArray = [];
    for(let i = 0; i<inputArr.length; i++){
        let [productName,price] = inputArr[i].split(" : ");
        price = Number(price);
      let obj  = {productName:productName,price:price};
      objArray.push(obj)
      
    } 
    objArray.sort((a,b)=>a.productName.localeCompare(b.productName))
    let currentLetter='';
    for (const products of objArray) {
        let current = products.productName;
        if(current[0] !== currentLetter){
            currentLetter = current[0];
            console.log(current[0]);
            console.log(`  ${products.productName}: ${products.price}`)
        } else {
            console.log(`  ${products.productName}: ${products.price}`)
        }
    }
    //return objArray;

}

console.log(solve(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']))
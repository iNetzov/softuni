function solve(arr){
    const prod = {};
    for(let i = 0; i<arr.length; i+=2){
        let product = arr[i];
        let calories = arr[i+1];
        prod[product] = Number(calories);
    }
    return prod;

}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))
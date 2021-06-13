function solve(arr){
    let output = arr.slice();
    let biggestNumber = output[0]
    let outputArr =[]
    outputArr.push(biggestNumber);

    for(let i = 1; i< output.length; i++){
        if(biggestNumber<output[i]){
            biggestNumber =+ output[i];
            outputArr.push(biggestNumber);
        }
    }
    return outputArr.join('\n');

}
console.log(solve([1,3,8,4,10,12,3,2,24]));
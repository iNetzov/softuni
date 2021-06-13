function solve (arr,rotation) {
    outputArr = arr.slice();
    for(let i = 0; i< rotation; i++){
        let number = outputArr.pop();
        outputArr.unshift(number);
       // console.log(outputArr);
    }
    return outputArr.join(' ');

}
console.log(solve(['1','2','3','4'],2))
console.log(solve(['Banana','Orange','Coconut','Apple'],15))
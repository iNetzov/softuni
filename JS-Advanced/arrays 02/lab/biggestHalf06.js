function solve(arr){
    let output = arr.slice();
    let output2 = [];
    output.sort((a,b)=> a-b);
    let indexes = output.length
    if(indexes%2 !== 0){
        indexes = parseInt((indexes/2) +1)
        output2 = output.slice(indexes-1)
    }else{
        indexes = indexes/2
        output2 = output.slice(indexes)
    }
     
    return output2;

}
console.log(solve([3,19,14,7,2,19,6]))
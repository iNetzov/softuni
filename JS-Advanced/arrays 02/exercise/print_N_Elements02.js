function solve(arr,index){
    let outputArr = arr.slice();
    let output =  [];
    for(let i = 0; i < outputArr.length; i+=index){
        output.push(outputArr[i]);
    } 
    return output;

}
console.log(solve(['1','2','3','4','5'],2));
function solve(arr){
    let output = arr.slice();
    output.sort((a,b)=>a-b);
    output.splice(2);
    return output.join(' ');
}
console.log(solve([30,20,10,40,33,12,2]));
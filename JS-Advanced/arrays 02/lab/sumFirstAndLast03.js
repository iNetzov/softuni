function solve(arr){
    let first =arr.shift();
    let last =arr.pop();
    let output = Number(first)+Number(last);
    if(last === undefined){
        output = first*2
    }
    return output;
}

console.log(solve(['5']))
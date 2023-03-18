function solve(array) {
    let last = array.pop();
    array.push(last);
    let first  = array.shift();
    array.unshift(first);
    console.log(last+first);
}

solve([1,2,3,4,5,6])
solve([1,2,3,4,5,1])
solve([1,2,3,4,5,2])
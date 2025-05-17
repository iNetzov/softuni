function solve(arr){
let sortedArr = [];
for (const element of arr) {
    if(element<0){
        sortedArr.unshift(element);
    }else {
        sortedArr.push(element);
    }
}
return sortedArr 
}

console.log(solve([7,8,3,13,-2,6,-3,-10,11,-33]));
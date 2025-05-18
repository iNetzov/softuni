function solve(param){
let typeOfParam = typeof(param);
if(typeOfParam != 'number'){
    console.log(`We can not calculate the circle area, becaouse we receive a ${typeOfParam}.`);
} else {
    console.log((Math.PI * (param * param)).toFixed(2))
}
}

solve(5)
solve('name')
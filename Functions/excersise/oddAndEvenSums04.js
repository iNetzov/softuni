function solve (number) {
let array = ("" + number).split('');
let oddSum = getOdd(array)
let evenSum = getEven(array)
console.log(`Odd sum = ${evenSum}, Even sum = ${oddSum}`);

function getOdd(array){
    let sum = 0;
    for (let el of array) {
        el = Number(el)
        if(el % 2 == 0){
            sum += el;
        }
    }
    return sum;
}

function getEven(array){
    let sum = 0;
    for (let el of array) {
        el = Number(el)
        if(el % 2 != 0){
            sum += el;
        }
    }
    return sum;
}
}

solve(1000435)
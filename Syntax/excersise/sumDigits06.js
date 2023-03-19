function solve(digit){
digit = digit.toString()
    let totalSum = 0;

    for (let i = 0; i < digit.length; i++) {
        
        totalSum += Number(digit[i]);
    }
    console.log(totalSum);
}

solve(245678)
function solve(year) {
    let isItLeap = false;
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        isItLeap = true;
    }
    if (isItLeap) {
        console.log('yes')
    } else {
        console.log("no");
    }
}

solve(2005);
solve(2024);
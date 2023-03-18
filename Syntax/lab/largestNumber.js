function solve(num1, num2, num3) {
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    let biggestNumber = num1

    if (num1 > num2 && num1 > num3) {
        biggestNumber = num1;
    } else if (num2 > num1 && num2 > num3) {
        biggestNumber = num2;
    } else { num3 > num1 && num3 > num2 } {
        biggestNumber = num3
    }
    console.log(`The largest number is ${biggestNumber}.`);
}
solve(-3, -5, -22.5)
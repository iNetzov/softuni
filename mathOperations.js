function solve(num1, num2, operation) {
    switch (operation) {
        case '+':
            console.log(Number(num1) + Number(num2))
            break;
        case '-':
            console.log(Number(num1) - Number(num2))
            break;
        case '*':
            console.log(Number(num1) * Number(num2))
            break;
        case '/':
            console.log(Number(num1) / Number(num2))
            break;
            case '%':
            console.log(Number(num1) % Number(num2))
            break;
            case '**':
            console.log(Number(num1) ** Number(num2))
            break;
    }
}
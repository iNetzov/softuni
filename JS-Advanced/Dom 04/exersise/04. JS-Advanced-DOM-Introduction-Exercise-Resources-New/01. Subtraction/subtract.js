function subtract() {
    const num1 = Number(document.querySelector('#firstNumber').value);
    const num2 = Number(document.querySelector('#secondNumber').value);
    let total = num1 - num2;
    let result = document.querySelector('#result');
    result.textContent = total;
}
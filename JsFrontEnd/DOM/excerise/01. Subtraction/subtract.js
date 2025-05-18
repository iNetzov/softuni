function subtract() {
   let num1=  Number(document.querySelector('#firstNumber').value);
   let num2 = Number(document.querySelector('#secondNumber').value);
   document.querySelector('#result').textContent = num1 - num2;
}
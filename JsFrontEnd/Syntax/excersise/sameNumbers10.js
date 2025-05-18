function solve(numberArray) {
numberArray = numberArray+'';
    let array  = numberArray.split('');
    let currentNumber = Number(array[0]);
    let totalNumber = currentNumber;
    let isItTheSame = true;
    
    for (let i = 1; i < array.length; i++) {
        if(currentNumber == array[i] && isItTheSame === true){
            isItTheSame = true;

        }else {
            isItTheSame = false;
        }
     totalNumber += Number(array[i])
    }
    console.log(`${isItTheSame}`)
    console.log(`${totalNumber}`)
}
solve(2222222)
solve(1234)
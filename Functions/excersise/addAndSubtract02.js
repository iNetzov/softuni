function solve(number1, number2, number3){
    const sum = (number1, number2)=> { return number1+ number2};
    const subtract =  (sum, number3) => {return sum - number3};

  let number =  subtract(sum(number1,number2),number3);

    console.log(number);
} 

solve(1,5,3);
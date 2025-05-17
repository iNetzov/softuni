function solve (numbers){
    let outputArray = [];
 
     for(let i = 0 ; i<= numbers.length; i++){
         if(i % 2 !== 0){
             let currentNumber =(numbers[i]) * 2
             outputArray.push(currentNumber);
         }
    }
    return outputArray.reverse().join(' ');
 
 }
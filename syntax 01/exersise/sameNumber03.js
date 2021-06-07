function solve(num){
    let numToStr = num+'';
    let diggitNeeded = numToStr[0];
    let sum = 0;
    let isItTrue = true;
    for(let i = 0; i < numToStr.length; i++){
         sum += Number(numToStr[i]);
         if(numToStr[i] === diggitNeeded){

         }else {
             isItTrue = false;
         }
    }

    if(isItTrue){
        console.log('true');
    }else if(!isItTrue){
        console.log('false');
    }
    console.log(sum);

}
solve(2222222)
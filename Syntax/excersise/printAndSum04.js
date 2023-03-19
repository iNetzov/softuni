function solve(start,end){
    let numberLine ='';
    let outputNumber = 0;
    for(let i = start; i <= end; i++){
        numberLine += i +' ';
        outputNumber += i;
    }

    console.log(numberLine.trim());
    console.log(`Sum: ${outputNumber}`);
}

solve(5,10)
solve(0,26)
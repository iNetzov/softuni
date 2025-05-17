function solve(number = 5){
    let line = '';
    for(let i = 0; i < number ; i++){
        for(let i = 0; i<number ; i++){
            line +='* '
        }
        console.log(line);
        line = '';
    }
}

//solve(3);
//solve();
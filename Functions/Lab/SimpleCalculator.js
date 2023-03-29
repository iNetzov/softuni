function solve (param1, param2, condition) {
    switch(condition){
        case 'add':
            console.log(param1+param2);
            break;
        case 'multiply':
            console.log(param1*param2);
        case 'divide':
            console.log(param1/param2);
        case 'subtract':
            console.log(param1/param2);
    }
}

solve(1,2,'add')

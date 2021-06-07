function solve(num,op1,op2,op3,op4,op5){
num = operations(num,op1);
console.log(num);
num = operations(num,op2);
console.log(num);
num = operations(num,op3);
console.log(num);
num = operations(num,op4);
console.log(num);
num = operations(num,op5);
console.log(num);

    function operations(num , opStr){
        if (opStr === 'chop'){
            num = num/2;
        }else if (opStr ==='dice'){
           num  =  Math.sqrt(num);
        }else if (opStr === 'spice'){
            num++;
        }else if (opStr === 'bake'){
            num = num * 3;
        }else if (opStr === 'fillet'){
            num = num - (num * 0.20);
        }
        return num;
    }
}
solve(32,'chop','chop','chop','chop','chop');
function solve(number,...array) {
    const CHOP = 'chop';
    const DICE = 'dice';
    const BAKE = 'bake';
    const SPICE = 'spice';
    const FILLET = 'fillet';
    
    number = Number(number);

    for (const element of array) {
        if(element === CHOP){
            number = number / 2; 
        } else if(element === DICE) {
            number = Math.sqrt(number);
        } else if(element === SPICE){
            number = number + 1;
        }else if(element === BAKE) {
            number  = number * 3 ;
        }else if (element === FILLET) {
            number = number / 100;
            number = number * 80;
        }
        console.log(number);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');




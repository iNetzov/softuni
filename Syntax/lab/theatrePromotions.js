function solve(typeOfDay, age) {
    if(age < 0 || age > 122) {
        console.log('Error!')
        return undefined;
    }
    let price = -1;
    switch(typeOfDay) {
        case 'Weekday':
            if(age <= 18){
                price = 12;
            } else if(age <= 64){
                price = 18;
            } else if (age > 64){
                price = 12;
            }
            break;

            case 'Weekend':
            if(age <= 18){
                price = 15;
            } else if(age <= 64){
                price = 20;
            } else if (age > 64){
                price = 15;
            }
            break;
            
            case 'Holiday':
            if(age <= 18){
                price = 5;
            } else if(age <= 64){
                price = 12;
            } else if (age > 64){
                price = 10;
            }
            break;
    }
    console.log(`${price}$`)
}

solve("Weekday", 42)
solve("Holiday", -12)
solve("Holiday", 15)
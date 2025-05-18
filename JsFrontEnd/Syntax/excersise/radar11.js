function solve(speed,location) {
    const MOTORWAY ='motorway';
    const INTERSTATE = 'interstate';
    const CITY = 'city';
    const RESIDENTIAL = 'residential';

    const SPEEDING = 'speeding';
    const EXCESSIVE_SPEEDING = 'excessive speeding';
    const RECLESS = 'reckless driving';

    let speedLimit = 0;
    let status = '';
    let noStatusNeeded = false;
    let speedDifferance

    if (location === MOTORWAY) {
        speedLimit = 130;
    } else if (location === INTERSTATE) {
        speedLimit = 90;
    } else if (location === CITY) {
        speedLimit = 50;
    } else if (location === RESIDENTIAL) {
        speedLimit = 20;
    }
    
    if (speed - speedLimit <= 0){
        noStatusNeeded = true
    } else {
         speedDifferance   = speed - speedLimit;
        if(speedDifferance > 40){
            status = RECLESS;
        } else if(speedDifferance <= 40 && speedDifferance > 20){
            status = EXCESSIVE_SPEEDING;
        } else if(speedDifferance < 20 ){
            status = SPEEDING;
        }
    }

    if(!noStatusNeeded){
        console.log(`The speed is ${speedDifferance} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }
}

solve(40,'city')
solve(21,'residential')
solve(120,'interstate')
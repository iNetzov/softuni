function solve(speed, area){
    let alowedSpeed = 0;
    if(area ==='motorway'){
        alowedSpeed = 130;
    }else if (area === 'interstate'){
        alowedSpeed = 90;
    }else if (area === 'city'){
        alowedSpeed = 50;
    }else if (area === 'residential'){
        alowedSpeed = 20;
    }
    let status = '';
    let overSpeeding = speed - alowedSpeed;
    if(overSpeeding<=20){
        status = `speeding`
    }else if (overSpeeding<=40){
        status = `excessive speeding`
    }else{
        status = `reckless driving`
    }
    if(speed<=alowedSpeed){
        return (`Driving ${speed} km/h in a ${alowedSpeed} zone`)
    }else {
        return`The speed is ${overSpeeding} km/h faster than the allowed speed of ${alowedSpeed} - ${status}`
    }
    
}
console.log(solve(120, `interstate`));
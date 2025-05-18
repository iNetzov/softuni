function solve(input) {
    let scedule = {};
    for (const el of input) {
        let[dayOfWeek, name]= el.split(" ");
        if(scedule.hasOwnProperty(dayOfWeek)){
            console.log(`Conflict on ${dayOfWeek}!`)
        }else {
            scedule[dayOfWeek] = name;
            console.log(`Scheduled for ${dayOfWeek}`);
        }
    }
    for (const key in scedule) {
        console.log(`${key} -> ${scedule[key]}`)
    }

}

solve([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
])
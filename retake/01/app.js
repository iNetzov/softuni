function solve(arr){
    let horses = arr.shift().split("|")
     
    for(let el of arr){
        let [command,horseOne,horseTwo]= el.split(" ")
        if(command==="Finish"){
            break;
        }
        if(command === "Retake"){
            let firstIndex=  horses.indexOf(horseOne)
            let secondIndex= horses.indexOf(horseTwo);
            if(firstIndex<secondIndex){
     
                horses[firstIndex]= horseTwo
                horses[secondIndex]= horseOne
     
                console.log(`${horseOne} retakes ${horseTwo}.`);
     
            }
        }else if(command === "Trouble"){
            let firstIndex=  horses.indexOf(horseOne)
     
            if(firstIndex !== 0){
                let horseName=horses.splice(firstIndex,1);
                horses.splice(firstIndex-1,0,horseName[0])
                console.log(`Trouble for ${horseOne} - drops one position.`);
     
            }
        }else if(command === "Rage"){
            let firstIndex=  horses.indexOf(horseOne)
            if(firstIndex>=horses.length-2){
                let horseName=horses.splice(firstIndex,1);
                horses.push(horseName)
                console.log(`${horseOne} rages 2 positions ahead.`);
            }else{
                let horseName= horses.splice(firstIndex,1)
                horses.splice(firstIndex+2,0,horseName[0])
                console.log(`${horseOne} rages 2 positions ahead.`);
            }
        }else if(command==="Miracle"){
            let lastHorse = horses.splice(0,1)
            horses.push(lastHorse[0])
            console.log(`What a miracle - ${lastHorse} becomes first.`);
        }
    }
    console.log(horses.join("->"));
    console.log(`The winner is: ${horses[horses.length-1]}`);
    }
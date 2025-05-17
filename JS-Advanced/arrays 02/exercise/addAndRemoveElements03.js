function solve(commandArr){
    let outputArr = [];
    let counter = 1;
    for (const command of commandArr) {
        if(command === 'add'){
            outputArr.push(counter++);
        }else if (command==='remove'){
            outputArr.pop();
            counter++;
        }
    }
    if(outputArr.length < 1){
        return 'Empty';
    }else {
        return outputArr.join('\n');
    }

}
//console.log(solve(['add','add','add','add']))
console.log(solve(['add','add','remove','add','add']))
console.log(solve(['remove','remove','remove']))
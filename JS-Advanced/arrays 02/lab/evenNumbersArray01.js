function solve (input){
    let outputStr =[];
    for(let i = 0; i<input.length;i++){
        if(i % 2 === 0){
            let a  = input[i];
            outputStr.push(input[i]);
        }
       
    }
    return outputStr.join(' ');
}

console.log(solve(['02','30','40']));
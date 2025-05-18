function solve(array){
    array = array.map((e)=> Number(e));
   let  newArray = array.sort((a,b) => a - b );
    outputArray = [];
    while(newArray.length > 0) {
        let biggest = newArray.pop();
        let smallest =  newArray.shift();

        outputArray.push(smallest);
        outputArray.push(biggest);
    }
   return outputArray;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
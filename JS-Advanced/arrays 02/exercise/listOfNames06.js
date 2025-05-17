function solve(arr){
    let copyArr = arr.slice();
   copyArr.sort((a, b) => a.localeCompare(b));
   let  output = [];
   for(let i = 0; i< copyArr.length; i++  ){
       output.push(`${i+1}.${copyArr[i]}`);
   }
   return output.join('\n');

}
console.log(solve(['ivailo','liliq','vesko','ani','reti']))
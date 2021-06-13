function solve(arr){
    let copyArr = arr.slice();
   let sortedArr =  copyArr.sort((a,b)=>b-a);
   //console.log(sortedArr);
   let output = [];
   while(sortedArr.length > 0){
       let last = sortedArr.pop();
       let first = sortedArr.shift();
       output.push(last);
       output.push(first);
       
   }
   return output


}
console.log(solve([-1,65,3,52,48,63,31,-3,18,56]));
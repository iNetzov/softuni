function solve(percent) {

   let index = getInput(percent);
   let percents = '';
   for (let i = 1; i <= index; i++) {
    percents += '%';
   }
   
   for (let i = percents.length; i < 10; i++) {
    percents += ".";
   }

//    console.log(percents);

   if(percent === 100){
    console.log(`100% Complate!`)
   }else{
    console.log(`${percent}% [${percents}]`)
    console.log(`Still loading...`)
   }


   function getInput(percent){
        let a =  percent /100;
        return a * 10;
    }
}

// solve(30);
solve(100);
// solve(30);
// solve(30);
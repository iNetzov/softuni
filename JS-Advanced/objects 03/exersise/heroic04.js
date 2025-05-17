function solve(inputArr){
   let heroArr = []; 
   for (let index = 0; index < inputArr.length; index++) {
      let [name, level, items] = inputArr[index].split(' / ')
      level = Number(level);
      if(items !== undefined){
        items = items.split(', ');
      }else {
         items=[];
      }

      heroArr.push({name: name,level: level,items: items});

   }
   return JSON.stringify(heroArr);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']))
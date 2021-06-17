function solve(inputArr) {
  let objArr = [];
    for(let i = 1; i<inputArr.length; i++){
        let [town,latitude,longitude] = inputArr[i].split(' | ');
      town = town.replace('|',' ').trim();
      latitude = Number(latitude.replace('|',' ').trim());
         let a =  longitude.split('|');
       longitude = Number(a[0]);
       let obj = {Town:town,Latitude:Number(latitude.toFixed(2)),Longitude:Number(longitude.toFixed(2))}
       objArr.push(obj);
    }
   return JSON.stringify(objArr);

}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']))
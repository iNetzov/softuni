function solve(input){
function getWeels(size){
    let num = [];
   for(let i = 0; i<4;i++){
    if(size%2==0){
        size = size-1
    }
    num.push(size);
   }
    return num
}
function getEngine(power){
    const engines = [
        {power:90,volume:1800},
        {power:120,volume:2400},
        {power:200,volume:3500}
    ]
    let result;
    for(let i = 0 ; i<engines.length; i++){
        if(engines[i].power >= power){
            result = engines[i];
            break;
        }
    }
    return result;

}
function getCarriage(carriage,color){
    if(carriage ==='hatchback'){
        return {
            type:'hatchback',
            color:`${color}`}
    }else{
        return {
            type:'coupe',
            color:`${color}`}
    }
};
    const car = {
        model : input.model,
        engine:getEngine(input.power),
        carriage:getCarriage(input.carriage,input.color),
        weels:getWeels(input.wheelsize),
    }



    return car;
}
    
console.log(solve({ model: 'opel', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 16 }))
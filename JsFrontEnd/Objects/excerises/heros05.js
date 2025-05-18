function solve (input) {
    
    let heroList = [];
    for (const e of input) {
        let hero = {
            name:"" ,
            level:0 ,
            gear:[] 
        }
        let [name,level,gear] = e.split(" / ");
        hero.name = name;
        hero.level = Number(level);
        hero.gear = gear.split(', ');
        heroList.push(hero);
    }
    heroList.sort((hero1,hero2) =>hero1.level - hero2.level);
    for (const hero of heroList) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.gear.join(', ')}`);
    }    
}

solve([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])
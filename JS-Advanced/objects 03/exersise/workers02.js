function solve(obj){
    if(obj.dizziness === true){
        let weight = obj.weight
        let experience = obj.experience;
        let lvlOfHydratation = obj.levelOfHydrated;
        let newLvl  = (0.1*weight)*experience
        obj.levelOfHydrated+=newLvl;
        obj.dizziness = false;
        return obj;
    }else{
        return obj;
    }

}
console.log(solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true }));
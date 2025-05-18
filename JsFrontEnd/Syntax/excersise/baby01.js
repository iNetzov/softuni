function solve (age){
age =Number(age);
let stageOfLife='out of bounds';
if(age > 0 && age <= 2){
stageOfLife = 'baby';
}else if(age>2 && age<=13){
stageOfLife = 'child'
}else if(age>13 && age <= 19 ){
stageOfLife = 'teenager'
}else if(age > 19 && age <= 65 ){
stageOfLife = 'adult'
} else if (age > 65) {
stageOfLife = 'elder'
}
console.log(stageOfLife);
}


solve(2);
solve(-2);
solve(33);
solve(106);


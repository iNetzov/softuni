function solve(obj) {
let keys = Object.keys(obj);
for (const key of keys) {
    console.log(`${key} -> ${obj[key]}`)
}

}

solve({
    name:'Sofia',
    area:492,
    population:1238438,
    country:'Bulgaria',
    postCode:1000})
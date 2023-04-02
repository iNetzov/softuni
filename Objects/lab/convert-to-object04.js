function solve(input) {
let json  = JSON.parse(input);
let entries = Object.entries(json);
for (const [key,value] of entries) {
    console.log(`${key}: ${value}`);
}
}

solve('{"name": "George","age": 45, "town":"Sofia"}');
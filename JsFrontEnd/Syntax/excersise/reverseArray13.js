function solve(array,times) {
times = Number(times)
    for (let i = 0; i < times; i++) {
        let number = array.shift();
        array.push(number);
    }
console.log(array.join(" "));
}
solve([32, 21, 61, 1], 4);
function solve (str,quantity) {
    let array = [];

    for (let i = 0; i < quantity; i++) {
        array.push(str);
    }
    
    console.log(array.join(""));
}

solve('abv', 4)
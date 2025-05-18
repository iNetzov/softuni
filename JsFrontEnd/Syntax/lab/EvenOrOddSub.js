function solve(array) {
    let even = 0;
    let odd=0;
    for(let i = 0; i<array.length; i++){
        let number = array[i];
        if(i % 2 == 0){
            even = even + number;
        } else {
            odd = odd + number;
        }
    }
    console.log(`${even-odd}`)
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);

function solve(){
    let girl1 =21
    let girl2 =15
    let girl3 =7
    let girls = girl1 + girl2 + girl3;
    let mother = 55
    let counter = 1;

    for(let i = 0; girls >= mother; i+=3){
        mother += 3
        counter++;
    }
    console.log(counter)
}
solve();
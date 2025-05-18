function solve(f,s,t) {
    let array =  [];
    array.unshift(f);
    array.unshift(s);
    array.unshift(t);

    console.log(array.join(" "));
}
solve('a','b','c');
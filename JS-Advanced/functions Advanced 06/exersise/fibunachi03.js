function solve(){
    let a = 0;
    let b = 1
    let result = 0 
    return function fib(){
       result = a+b;
       a = b;
       b = result;
       return a;
    }
}
let fib = solve();
console.log(fib());
console.log(fib());
console.log(fib());
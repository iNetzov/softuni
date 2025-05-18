 function solve(str,matcher){
let array = str.split(' ');
let counter = 0; 
for (let word of array) {
    if(word == matcher){
    counter++;
    }
}
console.log(counter);
 }


 solve('this is me i am is god','is');
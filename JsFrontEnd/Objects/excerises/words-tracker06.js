function solve (input) {
    let words= {}
    let wordsArray = input[0].split(" ");
    for (const w of wordsArray) {
        if(!words.hasOwnProperty(w)){
            words[w] = 0;
        }else {
           let oldValue =  words[w];
           words[w] = oldValue += 1;
        }
    }
    // console.log(words);
    for (const w of input) {
        if(words.hasOwnProperty(w)){
          let oldValue = words[w];
          words[w] = ++oldValue;
    }
    // console.log(w);
}
let output = []
for (const key in words) {
    output.push({name: key, quantity: Number(words[key])});
}
output.sort((a,b)=> b.quantity - a.quantity);

for (const o of output) {
    console.log(`${o.name} - ${o.quantity}`);
}
}
// solve([

//     'this sentence',
    
//     'In', 'this', 'sentence', 'you', 'have',
    
//     'to', 'count', 'the', 'occurrences', 'of',
    
//     'the', 'words', 'this', 'and', 'sentence',
    
//     'because', 'this', 'is', 'your', 'task'
    
//     ]);


    solve([

        'is the',
        
        'first', 'sentence', 'Here', 'is',
        
        'another', 'the', 'And', 'finally', 'the',
        
        'the', 'sentence'])
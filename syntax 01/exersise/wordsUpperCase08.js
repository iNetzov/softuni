function solve(str){
    let formatedWord = [];
    let words = str.split(/\W+/g);
    for(const word of words){   
        if(word !==''){
        formatedWord.push(word.toUpperCase());
    }
}
console.log(formatedWord)
}
solve('hi my name is?')
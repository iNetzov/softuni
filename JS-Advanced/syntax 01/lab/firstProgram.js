function output(text){
    let txt = text;
    let numberOfCharacters = 0;
    for(let i  = 0; i<= text.length-1; i++){
    numberOfCharacters++;
}
    console.log(numberOfCharacters);
    console.log(txt);
}

output('Hello, JavaScript!');
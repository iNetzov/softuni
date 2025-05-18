function solve(char1, char2) {
    // char1 =  Number(char1);
    char1 = char1.charCodeAt(0);
    char2 = char2.charCodeAt(0);
    let array = interateAllElements(char1, char2);
    console.log(array.join(' '));
    
    function interateAllElements(char1, char2) {
        let mathMin = Math.min(char1,char2);
        let mathMax = Math.max(char1,char2);
        let array = [];
        for (let i = mathMin+1; i < mathMax; i++) {
            array.push(String.fromCharCode(i));
        }
        return array;
    }

}

solve('#',':');
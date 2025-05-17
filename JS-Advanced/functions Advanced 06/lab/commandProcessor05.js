function solve() {
    let result = '';
    return {
        append: append,
        removeStart: removeStart,
        removeEnd: removeEnd,
        print: print,
    }



    function append(str) {
        result += str;
    }
    function removeStart(number) {
        result = result.substring(number)
    }
    function removeEnd(number) {
        result = result.substring(0,result.length-number);
    }
    function print(){
        console.log(result);
    }
}

let a = solve();
a.append('hello');
a.print();
a.removeStart(2);
a.print();
a.removeEnd(1);
a.print();
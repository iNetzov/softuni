function solve(numbers) {
    for (let el of numbers) {
        let isItPalindrom = checkIfPalindrom(el)
        console.log(isItPalindrom);
    }
    
    
    function checkIfPalindrom(e) {
      e = e.toString()
      let elementArray = e.split('');
      let reverseArray = elementArray.reverse();
      for (let i = 0; i < elementArray.length; i++) {
        if(elementArray[i] === reverseArray[reverseArray.length-1-i]){

        }else {
            return false;
        }
        
      }
      return true;
    }
}


solve([111,123,121]);

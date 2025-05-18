function colorize() {
    let [notNeeded, ...colletion] = document.querySelectorAll('tr');
    console.log(colletion);
    for (let index = 0; index < colletion.length; index++) {
        if(index % 2 == 0 ){
           let element =  colletion[index];
           console.log(element);
           element.style.background= 'Teal';
        }
        
    }
}